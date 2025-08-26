import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, FileText, Bell, Settings } from "lucide-react";

const navItems = [
  { label: "Overview", icon: Home, to: "/dashboard/overview" },
  { label: "Marketplace", icon: ShoppingCart, to: "/dashboard/marketplace" },
  { label: "LegalVault", icon: FileText, to: "/dashboard/legal-vault" },
  { label: "Notifications", icon: Bell, to: "/dashboard/notifications" },
  { label: "Settings", icon: Settings, to: "/dashboard/settings" },
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-2xl px-4 py-2 flex justify-between items-center w-[95vw] max-w-xl border border-gray-100">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.to;
        return (
          <Link
            key={item.label}
            to={item.to}
            className={`flex flex-col items-center px-2 py-1 transition-colors duration-200 ${
              isActive ? "text-[#053DA6]" : "text-gray-400 hover:text-[#053DA6]"
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? "scale-110" : ""}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
