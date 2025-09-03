import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const callbackData = await req.json();
    
    console.log('M-Pesa callback received:', JSON.stringify(callbackData, null, 2));

    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Extract callback data
    const stkCallback = callbackData.Body?.stkCallback;
    
    if (!stkCallback) {
      console.error('Invalid callback structure');
      return new Response('Invalid callback', { status: 400 });
    }

    const resultCode = stkCallback.ResultCode;
    const resultDesc = stkCallback.ResultDesc;
    const checkoutRequestId = stkCallback.CheckoutRequestID;
    const merchantRequestId = stkCallback.MerchantRequestID;

    let mpesaReceiptNumber = null;
    let transactionDate = null;
    let phoneNumber = null;
    let amount = null;

    // Extract additional data if payment was successful
    if (resultCode === 0 && stkCallback.CallbackMetadata?.Item) {
      const metadata = stkCallback.CallbackMetadata.Item;
      
      for (const item of metadata) {
        switch (item.Name) {
          case 'MpesaReceiptNumber':
            mpesaReceiptNumber = item.Value;
            break;
          case 'TransactionDate':
            // Convert from format like 20231201120000 to ISO date
            const dateStr = item.Value.toString();
            const year = dateStr.substr(0, 4);
            const month = dateStr.substr(4, 2);
            const day = dateStr.substr(6, 2);
            const hour = dateStr.substr(8, 2);
            const minute = dateStr.substr(10, 2);
            const second = dateStr.substr(12, 2);
            transactionDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`).toISOString();
            break;
          case 'PhoneNumber':
            phoneNumber = item.Value;
            break;
          case 'Amount':
            amount = item.Value;
            break;
        }
      }
    }

    // Update transaction status
    const status = resultCode === 0 ? 'completed' : 'failed';
    
    const { data: transaction, error: updateError } = await supabase
      .from('mpesa_transactions')
      .update({
        status: status,
        mpesa_receipt_number: mpesaReceiptNumber,
        transaction_date: transactionDate,
        raw_callback: callbackData
      })
      .eq('checkout_request_id', checkoutRequestId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating transaction:', updateError);
      return new Response('Database update failed', { status: 500 });
    }

    // If payment successful, update order status
    if (resultCode === 0 && transaction?.order_id) {
      const { error: orderError } = await supabase
        .from('orders')
        .update({
          payment_status: 'paid',
          paid_at: transactionDate || new Date().toISOString(),
          payment_reference: mpesaReceiptNumber
        })
        .eq('id', transaction.order_id);

      if (orderError) {
        console.error('Error updating order:', orderError);
      } else {
        console.log(`Order ${transaction.order_id} marked as paid`);
      }
    }

    console.log(`Transaction ${checkoutRequestId} updated to status: ${status}`);

    return new Response(
      JSON.stringify({ success: true, message: 'Callback processed' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Callback processing error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Callback processing failed' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});