import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav, { NavItem } from "../ui/BottomNav";
import { Home, ShoppingCart, FileText, Bell, Settings } from "lucide-react";

const userNavItems: NavItem[] = [
  { label: "Overview", icon: Home, to: "/dashboard/overview" },
  { label: "Marketplace", icon: ShoppingCart, to: "/dashboard/marketplace" },
  { label: "LegalVault", icon: FileText, to: "/dashboard/legal-vault" },
  { label: "Notifications", icon: Bell, to: "/dashboard/notifications" },
  { label: "Settings", icon: Settings, to: "/dashboard/settings" },
];

const UserLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F2]">
      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
      {/* Bottom navigation: only on small screens */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav navItems={userNavItems} />
      </div>
    </div>
  );
};

export default UserLayout;
