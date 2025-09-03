import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  slug: string;
  media?: any;
  status: string;
  featured: boolean;
  brand?: string;
  model?: string;
  skus?: {
    id: string;
    price_base: number;
    compare_at_price?: number;
    stock_qty: number;
    is_active: boolean;
    attributes: any;
  }[];
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSku, setSelectedSku] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          skus (*)
        `)
        .eq('status', 'active');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = (product: Product, sku: any) => {
    setSelectedProduct(product);
    setSelectedSku(sku);
    setCheckoutModalOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutModalOpen(false);
    setSelectedProduct(null);
    setSelectedSku(null);
  };

  const getProductImage = (media: any) => {
    if (media && Array.isArray(media) && media.length > 0) {
      return media[0].url || media[0];
    }
    return "/placeholder.svg";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg" />
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-3 bg-muted rounded mb-4" />
                  <div className="h-6 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Premium Drone Collection
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Discover professional-grade drones for every need
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Products</h2>
            <p className="text-muted-foreground">{products.length} products available</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={getProductImage(product.media)}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-gradient-hero">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  {product.subtitle && (
                    <p className="text-sm text-muted-foreground mb-2">{product.subtitle}</p>
                  )}
                  {product.brand && (
                    <Badge variant="outline" className="mb-2">{product.brand}</Badge>
                  )}
                  
                  {product.skus && product.skus.length > 0 && (
                    <div className="space-y-2">
                      {product.skus.filter(sku => sku.is_active).map((sku) => (
                        <div key={sku.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-lg">
                              KES {sku.price_base.toLocaleString()}
                            </span>
                            {sku.compare_at_price && (
                              <span className="text-sm text-muted-foreground line-through">
                                KES {sku.compare_at_price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <Badge variant={sku.stock_qty > 0 ? "default" : "destructive"}>
                            {sku.stock_qty > 0 ? `${sku.stock_qty} in stock` : "Out of stock"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  {product.skus && product.skus.length > 0 ? (
                    <div className="w-full space-y-2">
                      {product.skus.filter(sku => sku.is_active && sku.stock_qty > 0).map((sku) => (
                        <Button
                          key={sku.id}
                          onClick={() => handleBuyNow(product, sku)}
                          className="w-full"
                          variant="hero"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now - KES {sku.price_base.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Button disabled className="w-full">
                      No variants available
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products available</h3>
              <p className="text-muted-foreground">Check back later for new arrivals!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      {/* Checkout Modal */}
      {selectedProduct && selectedSku && (
        <CheckoutModal
          product={selectedProduct}
          sku={selectedSku}
          isOpen={checkoutModalOpen}
          onClose={handleCloseCheckout}
        />
      )}
    </div>
  );
};

export default Shop;