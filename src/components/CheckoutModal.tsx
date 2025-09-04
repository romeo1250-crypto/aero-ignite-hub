import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard } from "lucide-react";

interface CheckoutModalProps {
  product: any;
  sku: any;
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ product, sku, isOpen, onClose }: CheckoutModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatPhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Convert to Kenya format (254...)
    if (cleaned.startsWith('0')) {
      return '254' + cleaned.substring(1);
    } else if (cleaned.startsWith('254')) {
      return cleaned;
    } else if (cleaned.startsWith('+254')) {
      return cleaned.substring(1);
    } else {
      return '254' + cleaned;
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return false;
    }

    if (!/^\d{10,12}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Create order first
      const orderNumber = `ORD-${Date.now()}`;
      const orderData = {
        order_number: orderNumber,
        user_id: null, // Guest checkout
        guest_email: formData.email,
        guest_phone: formData.phone,
        subtotal: sku.price_base,
        tax_total: 0,
        shipping_total: 0,
        discount_total: 0,
        grand_total: sku.price_base,
        currency: 'KES',
        payment_method: 'mpesa',
        payment_status: 'pending',
        fulfilment_status: 'unfulfilled',
        billing_address: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address_line1: formData.address,
          town: formData.city
        },
        shipping_address: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address_line1: formData.address,
          town: formData.city
        },
        notes: formData.notes
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order item
      const orderItemData = {
        order_id: order.id,
        sku_id: sku.id,
        quantity: 1,
        unit_price: sku.price_base,
        name_snapshot: product.name,
        attributes_snapshot: sku.attributes || {}
      };

      const { error: itemError } = await supabase
        .from('order_items')
        .insert(orderItemData);

      if (itemError) throw itemError;

      // Initiate Mpesa STK Push
      console.log('Initiating M-Pesa payment with data:', {
        phone: formatPhoneNumber(formData.phone),
        amount: sku.price_base,
        order_id: order.id,
        description: `Payment for ${product.name}`
      });

      const { data: paymentData, error: paymentError } = await supabase.functions.invoke('mpesa-payment', {
        body: {
          phone: formatPhoneNumber(formData.phone),
          amount: sku.price_base,
          order_id: order.id,
          description: `Payment for ${product.name}`
        }
      });

      console.log('M-Pesa payment response:', { paymentData, paymentError });

      if (paymentError) {
        console.error('M-Pesa function error:', paymentError);
        throw new Error(paymentError.message || 'Failed to connect to payment service');
      }

      if (paymentData && paymentData.success) {
        toast({
          title: "Payment Initiated",
          description: "Please check your phone for the M-Pesa payment prompt. You have 2 minutes to complete the payment.",
        });
        
        // Check payment status after a delay
        setTimeout(() => {
          checkPaymentStatus(order.id);
        }, 15000); // Increased delay to 15 seconds
        
        onClose();
      } else {
        const errorMessage = paymentData?.message || 'Payment initiation failed';
        console.error('M-Pesa payment failed:', errorMessage);
        throw new Error(errorMessage);
      }

    } catch (error: any) {
      console.error('Payment error details:', error);
      toast({
        title: "Payment Failed",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const checkPaymentStatus = async (orderId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('check-payment-status', {
        body: { order_id: orderId }
      });

      if (!error && data.success) {
        toast({
          title: "Payment Successful",
          description: "Your order has been confirmed!",
        });
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <img
                  src={product.media?.[0]?.url || "/placeholder.svg"}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{product.name}</h4>
                  {product.subtitle && (
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm">Quantity: 1</span>
                    <span className="font-semibold">KES {sku.price_base.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KES {sku.price_base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Included</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>KES {sku.price_base.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="0712345678"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Enter your M-Pesa registered number
              </p>
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="notes">Order Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any special instructions..."
                className="min-h-[80px]"
              />
            </div>

            <Button
              onClick={handlePayment}
              disabled={loading}
              className="w-full"
              variant="hero"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay with M-Pesa
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;