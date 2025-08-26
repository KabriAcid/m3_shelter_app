import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import Topbar from "./Topbar";
import BottomNav from "../ui/BottomNav";

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
        <BottomNav />
      </div>
    </div>
  );
};

export default AdminLayout;
