import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2, Save, X, Package, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  brand: string;
  model: string;
  status: string;
  category_id: string;
  featured: boolean;
  featured_rank: number;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  parent_id: string | null;
  created_at: string;
}

interface SKU {
  id: string;
  sku_code: string;
  product_id: string;
  price_base: number;
  compare_at_price: number;
  stock_qty: number;
  is_active: boolean;
  attributes: any;
}

export function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [skus, setSkus] = useState<SKU[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("products");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const { toast } = useToast();

  const [productForm, setProductForm] = useState({
    name: "",
    slug: "",
    subtitle: "",
    description: "",
    brand: "",
    model: "",
    status: "draft",
    category_id: "",
    featured: false,
    featured_rank: 0
  });

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    description: "",
    parent_id: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes, skusRes] = await Promise.all([
        supabase.from('products').select('*').order('created_at', { ascending: false }),
        supabase.from('categories').select('*').order('name'),
        supabase.from('skus').select('*')
      ]);

      if (productsRes.error) throw productsRes.error;
      if (categoriesRes.error) throw categoriesRes.error;
      if (skusRes.error) throw skusRes.error;

      setProducts(productsRes.data || []);
      setCategories(categoriesRes.data || []);
      setSkus(skusRes.data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleProductSubmit = async () => {
    try {
      if (editingProduct) {
        const { error } = await supabase
          .from('products')
          .update(productForm)
          .eq('id', editingProduct.id);

        if (error) throw error;
        toast({ title: "Success", description: "Product updated successfully" });
      } else {
        const { error } = await supabase
          .from('products')
          .insert([productForm]);

        if (error) throw error;
        toast({ title: "Success", description: "Product created successfully" });
      }

      fetchData();
      resetProductForm();
      setIsProductDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save product",
        variant: "destructive"
      });
    }
  };

  const handleCategorySubmit = async () => {
    try {
      if (editingCategory) {
        const { error } = await supabase
          .from('categories')
          .update(categoryForm)
          .eq('id', editingCategory.id);

        if (error) throw error;
        toast({ title: "Success", description: "Category updated successfully" });
      } else {
        const { error } = await supabase
          .from('categories')
          .insert([categoryForm]);

        if (error) throw error;
        toast({ title: "Success", description: "Category created successfully" });
      }

      fetchData();
      resetCategoryForm();
      setIsCategoryDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save category",
        variant: "destructive"
      });
    }
  };

  const handleProductEdit = (product: Product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      slug: product.slug,
      subtitle: product.subtitle || "",
      description: product.description || "",
      brand: product.brand || "",
      model: product.model || "",
      status: product.status,
      category_id: product.category_id || "",
      featured: product.featured || false,
      featured_rank: product.featured_rank || 0
    });
    setIsProductDialogOpen(true);
  };

  const handleCategoryEdit = (category: Category) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
      parent_id: category.parent_id || ""
    });
    setIsCategoryDialogOpen(true);
  };

  const handleProductDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({ title: "Success", description: "Product deleted successfully" });
      fetchData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive"
      });
    }
  };

  const handleCategoryDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({ title: "Success", description: "Category deleted successfully" });
      fetchData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete category",
        variant: "destructive"
      });
    }
  };

  const resetProductForm = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      slug: "",
      subtitle: "",
      description: "",
      brand: "",
      model: "",
      status: "draft",
      category_id: "",
      featured: false,
      featured_rank: 0
    });
  };

  const resetCategoryForm = () => {
    setEditingCategory(null);
    setCategoryForm({
      name: "",
      slug: "",
      description: "",
      parent_id: ""
    });
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || "Uncategorized";
  };

  const getProductSKUs = (productId: string) => {
    return skus.filter(sku => sku.product_id === productId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Product Management</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Products</h2>
            <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-hero" onClick={resetProductForm}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingProduct ? "Edit Product" : "Create New Product"}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={productForm.name}
                        onChange={(e) => setProductForm(prev => ({
                          ...prev,
                          name: e.target.value,
                          slug: generateSlug(e.target.value)
                        }))}
                        placeholder="Enter product name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        value={productForm.slug}
                        onChange={(e) => setProductForm(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="product-slug"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={productForm.subtitle}
                      onChange={(e) => setProductForm(prev => ({ ...prev, subtitle: e.target.value }))}
                      placeholder="Brief product subtitle"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={productForm.description}
                      onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Product description"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        value={productForm.brand}
                        onChange={(e) => setProductForm(prev => ({ ...prev, brand: e.target.value }))}
                        placeholder="Product brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Input
                        id="model"
                        value={productForm.model}
                        onChange={(e) => setProductForm(prev => ({ ...prev, model: e.target.value }))}
                        placeholder="Product model"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={productForm.status} onValueChange={(value) => setProductForm(prev => ({ ...prev, status: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={productForm.category_id} onValueChange={(value) => setProductForm(prev => ({ ...prev, category_id: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleProductSubmit} className="bg-gradient-hero">
                      <Save className="mr-2 h-4 w-4" />
                      {editingProduct ? "Update Product" : "Create Product"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="space-y-1">
                {products.map((product) => {
                  const productSKUs = getProductSKUs(product.id);
                  const totalStock = productSKUs.reduce((sum, sku) => sum + (sku.stock_qty || 0), 0);
                  const minPrice = productSKUs.length > 0 ? Math.min(...productSKUs.map(sku => sku.price_base)) : 0;
                  
                  return (
                    <div key={product.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold">
                          <Package className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {getCategoryName(product.category_id)} • Stock: {totalStock}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {minPrice > 0 && `From KSH ${minPrice.toLocaleString()}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={product.status === "active" ? "default" : "secondary"}>
                          {product.status}
                        </Badge>
                        <Button variant="ghost" size="icon" onClick={() => handleProductEdit(product)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleProductDelete(product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
                {products.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    No products found. Create your first product to get started.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-hero" onClick={resetCategoryForm}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingCategory ? "Edit Category" : "Create New Category"}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoryName">Category Name</Label>
                    <Input
                      id="categoryName"
                      value={categoryForm.name}
                      onChange={(e) => setCategoryForm(prev => ({
                        ...prev,
                        name: e.target.value,
                        slug: generateSlug(e.target.value)
                      }))}
                      placeholder="Enter category name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categorySlug">Slug</Label>
                    <Input
                      id="categorySlug"
                      value={categoryForm.slug}
                      onChange={(e) => setCategoryForm(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="category-slug"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoryDescription">Description</Label>
                    <Textarea
                      id="categoryDescription"
                      value={categoryForm.description}
                      onChange={(e) => setCategoryForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Category description"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleCategorySubmit} className="bg-gradient-hero">
                      <Save className="mr-2 h-4 w-4" />
                      {editingCategory ? "Update Category" : "Create Category"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold">
                        <Tag className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="icon" onClick={() => handleCategoryEdit(category)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleCategoryDelete(category.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {categories.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    No categories found. Create your first category to get started.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}