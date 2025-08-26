import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Overview } from './pages/Dashboard/Overview';
import { Marketplace } from './pages/Dashboard/Marketplace';
import { LegalVault } from './pages/Dashboard/LegalVault';
import { Notifications } from './pages/Dashboard/Notifications';
import { Settings } from './pages/Dashboard/Settings';

// Placeholder components for existing pages
const Homepage = () => (
  <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#261C15] mb-4">Welcome to M3 Shelter</h1>
      <p className="text-lg text-gray-600">Real estate investment platform</p>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#261C15] mb-4">About M3 Shelter</h1>
      <p className="text-lg text-gray-600">Learn more about our platform</p>
    </div>
  </div>
);

const Features = () => (
  <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#261C15] mb-4">Features</h1>
      <p className="text-lg text-gray-600">Discover what we offer</p>
    </div>
  </div>
);

const Investments = () => (
  <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#261C15] mb-4">Investment Opportunities</h1>
      <p className="text-lg text-gray-600">Browse available properties</p>
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#261C15] mb-4">Blog</h1>
      <p className="text-lg text-gray-600">Latest news and insights</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/marketplace" element={<Marketplace />} />
          <Route path="/dashboard/legal-vault" element={<LegalVault />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;