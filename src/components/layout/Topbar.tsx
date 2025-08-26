import React from "react";

import { Bell, ChevronDown, User } from "lucide-react";

const notifications = [
  { id: 1, text: "New user registered", time: "2m ago" },
  { id: 2, text: "Investment approved", time: "15m ago" },
  { id: 3, text: "Payment processed", time: "1h ago" },
];

const Topbar: React.FC = () => {
  const [notifOpen, setNotifOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);

  return (
    <header className="w-full h-16 bg-gradient-to-r from-[#053DA6] to-[#042f85] flex items-center px-6 shadow-lg relative z-10">
      <div className="flex-1 flex items-center">
        <span className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
          <img
            src="/src/assets/favicon.png"
            alt="M3 Admin"
            className="w-12 h-12 rounded-lg"
          />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            onClick={() => setNotifOpen((open) => !open)}
            aria-label="Notifications"
          >
            <Bell className="text-white w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-100">
              <div className="px-4 py-2 font-semibold text-[#053DA6] border-b">
                Notifications
              </div>
              {notifications.length === 0 ? (
                <div className="px-4 py-3 text-gray-500">
                  No new notifications
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="px-4 py-2 hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span className="text-sm text-[#261C15]">{notif.text}</span>
                    <span className="text-xs text-gray-400">{notif.time}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            onClick={() => setProfileOpen((open) => !open)}
            aria-label="Profile"
          >
            <User className="text-white w-5 h-5" />
            <ChevronDown className="text-white w-4 h-4 ml-1" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-100">
              <div className="px-4 py-2 font-semibold text-[#053DA6] border-b">
                Admin
              </div>
              <button className="w-full text-left px-4 py-2 text-sm text-[#261C15] hover:bg-gray-50">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-[#261C15] hover:bg-gray-50">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
