import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const username = "Abhi"; // User name ikkada dynamic ga fetch cheskovachu

  const handleLogout = () => {
    // Logout logic implementation
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Compact Navigation Bar - White Background & Reduced Height */}
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <span className="text-xl font-black tracking-tighter text-[#0F172A]">
              resume<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* User Section - Avatar Removed & Name Aligned with Line */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 pr-5 border-r border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Welcome back,
              </span>
              <span className="text-sm font-black text-[#0F172A] tracking-tight">
                {username}
              </span>
            </div>

            <button 
              onClick={handleLogout}
              className="text-[10px] font-black text-slate-500 hover:text-red-600 px-3 py-1.5 border border-slate-100 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-inner"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;