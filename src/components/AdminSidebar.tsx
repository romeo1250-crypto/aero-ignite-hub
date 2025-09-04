import { 
  Home,
  Package,
  FileText,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  HelpCircle
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AdminSidebarProps {
  selectedView: string;
  onViewChange: (view: string) => void;
}

const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "products", 
    icon: Package,
  },
  {
    title: "Orders",
    url: "orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    url: "customers",
    icon: Users,
  },
  {
    title: "Content",
    url: "content",
    icon: FileText,
  },
  {
    title: "Blog",
    url: "blog",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
  {
    title: "Help",
    url: "help",
    icon: HelpCircle,
  },
];

export function AdminSidebar({ selectedView, onViewChange }: AdminSidebarProps) {
  return (
    <Sidebar className="w-60">
      <SidebarContent>
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-hero">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-primary">AeroLabz Admin</span>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => onViewChange(item.url)}
                    className={selectedView === item.url ? "bg-accent text-accent-foreground" : ""}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}