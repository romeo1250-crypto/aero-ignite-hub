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
    const { order_id } = await req.json();

    console.log('Checking payment status for order:', order_id);

    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check transaction status
    const { data: transaction, error } = await supabase
      .from('mpesa_transactions')
      .select('*')
      .eq('order_id', order_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching transaction:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Transaction not found'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 404 
        }
      );
    }

    console.log('Transaction status:', transaction.status);

    return new Response(
      JSON.stringify({
        success: true,
        status: transaction.status,
        mpesa_receipt_number: transaction.mpesa_receipt_number,
        transaction_date: transaction.transaction_date
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Status check error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Status check failed'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});