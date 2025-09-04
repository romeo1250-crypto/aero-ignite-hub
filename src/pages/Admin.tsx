import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogManager } from "@/components/admin/BlogManager";
import { ProductManager } from "@/components/admin/ProductManager";
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";

const Admin = () => {
  const [selectedView, setSelectedView] = useState("dashboard");

  const stats = [
    {
      title: "Total Revenue",
      value: "KSH 2,450,000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Students",
      value: "1,248",
      change: "+8.2%", 
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Orders This Month",
      value: "89",
      change: "+23.1%",
      icon: ShoppingCart,
      color: "text-purple-600"
    },
    {
      title: "Programs Running",
      value: "24",
      change: "+4.1%",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Nairobi Technical Institute", product: "Flight Simulation Package", amount: "KSH 45,000", status: "Completed" },
    { id: "ORD-002", customer: "Kenyatta University", product: "STEM Workshop Series", amount: "KSH 78,000", status: "In Progress" },
    { id: "ORD-003", customer: "Alliance High School", product: "VR Training Setup", amount: "KSH 120,000", status: "Pending" },
    { id: "ORD-004", customer: "Starehe Boys Centre", product: "Drone Racing Kit", amount: "KSH 32,000", status: "Completed" }
  ];

  const products = [
    { id: 1, name: "Professional Drone DJI Mavic 3", category: "Drones", price: "KSH 180,000", stock: 12, status: "Active" },
    { id: 2, name: "Flight Simulation Software License", category: "Software", price: "KSH 25,000", stock: 50, status: "Active" },
    { id: 3, name: "STEM Workshop Kit", category: "Educational", price: "KSH 15,000", stock: 8, status: "Low Stock" },
    { id: 4, name: "VR Headset - Education Package", category: "Hardware", price: "KSH 45,000", stock: 0, status: "Out of Stock" }
  ];

  const blogPosts = [
    { id: 1, title: "The Future of STEM Education in Kenya", author: "Dr. Sarah Kimani", date: "2024-01-15", status: "Published" },
    { id: 2, title: "How Flight Simulation Enhances Learning", author: "James Mwangi", date: "2024-01-10", status: "Draft" },
    { id: 3, title: "Student Success Stories from AeroLabz", author: "Grace Wanjiku", date: "2024-01-08", status: "Published" }
  ];

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button className="bg-gradient-hero">
          <Plus className="mr-2 h-4 w-4" />
          New Order
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest customer orders and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.id} • {order.product}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{order.amount}</span>
                  <Badge variant={order.status === "Completed" ? "default" : order.status === "In Progress" ? "secondary" : "outline"}>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ProductsView = () => <ProductManager />;

  const ContentView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button className="bg-gradient-hero">
          <Plus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>

      <Tabs defaultValue="pages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pages">Page Contents</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Content Management</CardTitle>
              <CardDescription>Edit and manage content for your website pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Home", description: "Hero section, services overview, testimonials", sections: ["Hero", "Services", "Stats", "CTA"] },
                  { name: "About", description: "Company story, mission, values, team intro", sections: ["Story", "Mission", "Values", "Timeline"] },
                  { name: "Services", description: "STEM programs, workshops, packages", sections: ["Programs", "Workshops", "Packages", "Benefits"] },
                  { name: "Portfolio", description: "Projects showcase, case studies, impact", sections: ["Projects", "Case Studies", "Results", "Gallery"] },
                  { name: "Team", description: "Team members, expertise, backgrounds", sections: ["Leadership", "Educators", "Specialists", "Advisors"] },
                  { name: "Contact", description: "Contact forms, office info, FAQ", sections: ["Form", "Info", "FAQ", "Map"] }
                ].map((page, index) => (
                  <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{page.name} Page</CardTitle>
                        <Badge variant="outline">Live</Badge>
                      </div>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium">Page Sections:</Label>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {page.sections.map((section, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {section}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="mr-2 h-3 w-3" />
                            Edit Content
                          </Button>
                          <Button variant="ghost" size="sm">
                            Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-4">
          <BlogManager />
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Media Library</CardTitle>
              <CardDescription>Manage images, videos, and other media files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📷</div>
                      <p className="text-xs text-muted-foreground">Media {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderView = () => {
    switch (selectedView) {
      case "dashboard":
        return <DashboardView />;
      case "products":
        return <ProductsView />;
      case "content":
        return <ContentView />;
      case "blog":
        return <BlogManager />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar selectedView={selectedView} onViewChange={setSelectedView} />
        <main className="flex-1 overflow-hidden">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome back, Admin</span>
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </header>
          <div className="p-6">
            {renderView()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Admin;