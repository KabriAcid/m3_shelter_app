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
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
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
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-700 transition-colors duration-200"
          onClick={() => setShowLogoutModal(true)}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center border border-gray-100">
            <LogOut className="mx-auto mb-4 h-10 w-10 text-gray-700" />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Sign Out</h2>
            <p className="text-gray-500 mb-6">
              Are you sure you want to sign out of the admin dashboard?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 rounded-lg bg-[#053DA6] text-white font-semibold hover:bg-[#042f85] transition-colors shadow"
                onClick={() => {
                  setShowLogoutModal(false);
                  window.location.href = "/admin/login";
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
