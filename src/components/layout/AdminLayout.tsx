import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import Topbar from "./Topbar";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F2]">
      <Topbar />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;