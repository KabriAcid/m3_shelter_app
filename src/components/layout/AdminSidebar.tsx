import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Building,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { clsx } from "clsx";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, to: "/admin" },
  { id: "users", label: "Users", icon: Users, to: "/admin/users" },
  {
    id: "investments",
    label: "Investments",
    icon: Building,
    to: "/admin/investments",
  },
  { id: "content", label: "Content", icon: FileText, to: "/admin/content" },
  {
    id: "transactions",
    label: "Transactions",
    icon: CreditCard,
    to: "/admin/transactions",
  },
  { id: "reports", label: "Reports", icon: BarChart3, to: "/admin/reports" },
  { id: "settings", label: "Settings", icon: Settings, to: "/admin/settings" },
];

export function AdminSidebar() {
  const location = useLocation();
  return (
    <div className="w-64 bg-[#053DA6] min-h-screen text-white relative">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FB7F00] rounded-lg flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">M3 Admin</h1>
            <p className="text-xs text-blue-200">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.id}
              to={item.to}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200",
                isActive
                  ? "bg-[#FB7F00] text-white"
                  : "text-blue-100 hover:bg-blue-700"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-700 transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
