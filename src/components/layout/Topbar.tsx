import React from "react";

const Topbar: React.FC = () => {
  return (
    <header className="w-full h-16 bg-gradient-to-r from-[#053DA6] to-[#042f85] flex items-center px-6 shadow-lg">
      <div className="flex-1 flex items-center">
        <span className="text-white text-2xl font-bold tracking-wide">
          <img src="/src/assets/favicon.png" alt="M3 Admin" />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Add premium admin controls, notifications, avatar, etc. here */}
        <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors">
          Upgrade
        </button>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
