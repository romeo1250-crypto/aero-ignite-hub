import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface MpesaRequest {
  phone: string;
  amount: number;
  order_id: string;
  description: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('M-Pesa function called with method:', req.method);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));
    
    const requestBody = await req.json();
    console.log('Request body received:', requestBody);
    
    const { phone, amount, order_id, description }: MpesaRequest = requestBody;

    console.log('Processing M-Pesa payment request:', { phone, amount, order_id, description });

    // Get M-Pesa credentials from environment
    const consumerKey = Deno.env.get('MPESA_CONSUMER_KEY');
    const consumerSecret = Deno.env.get('MPESA_CONSUMER_SECRET');
    const shortcode = Deno.env.get('MPESA_SHORTCODE');
    const passkey = Deno.env.get('MPESA_PASSKEY');

    console.log('Checking M-Pesa credentials:', {
      hasConsumerKey: !!consumerKey,
      hasConsumerSecret: !!consumerSecret,
      hasShortcode: !!shortcode,
      hasPasskey: !!passkey
    });

    if (!consumerKey || !consumerSecret || !shortcode || !passkey) {
      const missingCreds = [];
      if (!consumerKey) missingCreds.push('MPESA_CONSUMER_KEY');
      if (!consumerSecret) missingCreds.push('MPESA_CONSUMER_SECRET');
      if (!shortcode) missingCreds.push('MPESA_SHORTCODE');
      if (!passkey) missingCreds.push('MPESA_PASSKEY');
      
      console.error('Missing M-Pesa credentials:', missingCreds);
      throw new Error(`M-Pesa credentials not configured: ${missingCreds.join(', ')}`);
    }

    // Step 1: Get OAuth token
    const authString = btoa(`${consumerKey}:${consumerSecret}`);
    
    // Use production URLs for live environment
    const tokenResponse = await fetch('https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authString}`,
      },
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Token request failed:', errorText);
      throw new Error(`Token request failed: ${tokenResponse.status} - ${errorText}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    console.log('M-Pesa access token obtained');

    // Step 2: Generate timestamp and password
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = btoa(`${shortcode}${passkey}${timestamp}`);

    // Step 3: Prepare STK Push request
    const stkPushPayload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.round(amount), // Ensure it's an integer
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: `https://xgxgbnfljshiusflawcp.supabase.co/functions/v1/mpesa-callback`,
      AccountReference: order_id,
      TransactionDesc: description || "Payment for order"
    };

    console.log('STK Push payload:', { ...stkPushPayload, Password: '[HIDDEN]' });

    // Step 4: Send STK Push request - Use production URL
    const stkResponse = await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stkPushPayload),
    });

    const stkData = await stkResponse.json();
    console.log('STK Push response:', stkData);

    if (stkData.ResponseCode === "0") {
      // Store transaction details in database
      const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase
        .from('mpesa_transactions')
        .insert({
          order_id: order_id,
          phone_number: phone,
          amount: amount,
          checkout_request_id: stkData.CheckoutRequestID,
          merchant_request_id: stkData.MerchantRequestID,
          status: 'pending'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to store transaction');
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'STK Push sent successfully',
          checkout_request_id: stkData.CheckoutRequestID,
          merchant_request_id: stkData.MerchantRequestID
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    } else {
      throw new Error(`STK Push failed: ${stkData.ResponseDescription || 'Unknown error'}`);
    }

  } catch (error) {
    console.error('M-Pesa payment error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || 'Payment processing failed'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});