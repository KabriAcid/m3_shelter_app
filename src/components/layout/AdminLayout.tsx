import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import Topbar from "./Topbar";
import BottomNav, { NavItem } from "../ui/BottomNav";
import {
  Home,
  Users,
  Building,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const adminNavItems: NavItem[] = [
  { label: "Dashboard", icon: Home, to: "/admin" },
  { label: "Users", icon: Users, to: "/admin/users" },
  { label: "Investments", icon: Building, to: "/admin/investments" },
  { label: "Content", icon: FileText, to: "/admin/content" },
  { label: "Transactions", icon: CreditCard, to: "/admin/transactions" },
  { label: "Reports", icon: BarChart3, to: "/admin/reports" },
  { label: "Settings", icon: Settings, to: "/admin/settings" },
];

const AdminLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F2]">
      <Topbar />
      <div className="flex flex-1">
        {/* Sidebar: hidden on small screens */}
        <div className="hidden md:block">
          <AdminSidebar />
        </div>
        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
      {/* Bottom navigation: only on small screens */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav navItems={adminNavItems} />
      </div>
    </div>
  );
};

export default AdminLayout;
