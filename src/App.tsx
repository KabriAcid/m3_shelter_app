import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BottomNav from "./components/ui/BottomNav";

// Public pages
import Homepage from "./pages/Homepage";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Investments from "./pages/Investments";
import About from "./pages/About";
import Download from "./pages/Download";
import Blog from "./pages/Blog";

// User pages
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Overview } from "./pages/Dashboard/Overview";
import { Marketplace } from "./pages/Dashboard/Marketplace";
import { LegalVault } from "./pages/Dashboard/LegalVault";
import { Notifications } from "./pages/Dashboard/Notifications";
import { Settings as UserSettings } from "./pages/Dashboard/Settings";

// Admin pages
import { AdminSidebar } from "./components/layout/AdminSidebar";
import Topbar from "./components/layout/Topbar";
import { AdminDashboard } from "./pages/Admin/AdminDashboard";
import { Users } from "./pages/Admin/Users";
import { Investments as AdminInvestments } from "./pages/Admin/Investments";
import { Content } from "./pages/Admin/Content";
import { Transactions } from "./pages/Admin/Transactions";
import { Reports } from "./pages/Admin/Reports";
import { Settings as AdminSettings } from "./pages/Admin/Settings";

function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F2]">
      {/* Premium Topbar */}
      <Topbar />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="investments" element={<AdminInvestments />} />
            <Route path="content" element={<Content />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isDashboard = location.pathname.startsWith("/dashboard");
  const showNavFooter = !isAdmin && !isDashboard;
  return (
    <div className="min-h-screen bg-white relative">
      {showNavFooter && <Navigation />}
      <main>{children}</main>
      {isDashboard && <BottomNav />}
      {showNavFooter && <Footer />}
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Features />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/about" element={<About />} />
      <Route path="/download" element={<Download />} />
      <Route path="/blog" element={<Blog />} />

      {/* User routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Overview />} />
      <Route path="/dashboard/overview" element={<Overview />} />
      <Route path="/dashboard/marketplace" element={<Marketplace />} />
      <Route path="/dashboard/legal-vault" element={<LegalVault />} />
      <Route path="/dashboard/notifications" element={<Notifications />} />
      <Route path="/dashboard/settings" element={<UserSettings />} />

      {/* Admin routes */}
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
