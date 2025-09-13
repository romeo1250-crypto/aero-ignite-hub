import { supabase } from '@/integrations/supabase/client';

export interface MpesaPaymentRequest {
  phone: string;
  amount: number;
  order_id: string;
  description: string;
}

export interface MpesaPaymentResponse {
  success: boolean;
  message: string;
  checkout_request_id?: string;
  merchant_request_id?: string;
}

export interface MpesaStatusResponse {
  success: boolean;
  status: string;
  message?: string;
}

export class MpesaPaymentModule {
  private static formatPhoneNumber(phone: string): string {
    // Remove any non-digit characters
    let cleanPhone = phone.replace(/\D/g, '');
    
    // Handle Kenyan phone numbers
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '254' + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith('7') || cleanPhone.startsWith('1')) {
      cleanPhone = '254' + cleanPhone;
    } else if (!cleanPhone.startsWith('254')) {
      cleanPhone = '254' + cleanPhone;
    }
    
    return cleanPhone;
  }

  static async initiatePayment(paymentData: MpesaPaymentRequest): Promise<MpesaPaymentResponse> {
    try {
      const formattedPaymentData = {
        ...paymentData,
        phone: this.formatPhoneNumber(paymentData.phone)
      };

      console.log('Initiating M-Pesa payment:', formattedPaymentData);

      const { data, error } = await supabase.functions.invoke('mpesa-payment', {
        body: formattedPaymentData
      });

      if (error) {
        console.error('M-Pesa payment error:', error);
        throw new Error(error.message || 'Payment initiation failed');
      }

      return data as MpesaPaymentResponse;
    } catch (error) {
      console.error('M-Pesa payment module error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Payment failed'
      };
    }
  }

  static async checkPaymentStatus(checkoutRequestId: string): Promise<MpesaStatusResponse> {
    try {
      const { data, error } = await supabase.functions.invoke('check-payment-status', {
        body: { checkout_request_id: checkoutRequestId }
      });

      if (error) {
        console.error('Payment status check error:', error);
        throw new Error(error.message || 'Status check failed');
      }

      return data as MpesaStatusResponse;
    } catch (error) {
      console.error('Payment status check module error:', error);
      return {
        success: false,
        status: 'error',
        message: error instanceof Error ? error.message : 'Status check failed'
      };
    }
  }

  static async pollPaymentStatus(
    checkoutRequestId: string,
    onStatusUpdate?: (status: string) => void,
    maxAttempts: number = 30,
    intervalMs: number = 2000
  ): Promise<MpesaStatusResponse> {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const result = await this.checkPaymentStatus(checkoutRequestId);
      
      if (onStatusUpdate) {
        onStatusUpdate(result.status);
      }

      if (result.status === 'completed' || result.status === 'failed' || result.status === 'cancelled') {
        return result;
      }

      // Wait before next attempt
      await new Promise(resolve => setTimeout(resolve, intervalMs));
    }

    return {
      success: false,
      status: 'timeout',
      message: 'Payment status check timed out'
    };
  }
}