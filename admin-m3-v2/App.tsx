// Admin APP.tsx file
import React, { useState } from 'react';
import { AdminSidebar } from './components/layout/AdminSidebar';
import { AdminDashboard } from './pages/Admin/AdminDashboard';
import { Users } from './pages/Admin/Users';
import { Investments } from './pages/Admin/Investments';
import { Content } from './pages/Admin/Content';
import { Transactions } from './pages/Admin/Transactions';
import { Reports } from './pages/Admin/Reports';
import { Settings } from './pages/Admin/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'users':
        return <Users />;
      case 'investments':
        return <Investments />;
      case 'content':
        return <Content />;
      case 'transactions':
        return <Transactions />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F7F2]">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;