import React, { useState } from 'react';

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const brandNavy = "#1e3a8a"; 

  return (
    <div className="h-screen w-full bg-white text-slate-900 flex flex-col overflow-hidden">
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
          * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
        `}
      </style>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-24 py-5 w-full bg-white shrink-0">
        <a href="/" className="flex items-center">
          <span className="text-[26px] font-bold tracking-tighter">resume<span style={{color: brandNavy}}>.</span></span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-slate-500">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">AI Features</a>
          <a href="#" className="hover:text-black transition">Templates</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-[13px] font-semibold text-slate-600 px-4">Login</button>
          <button style={{ backgroundColor: brandNavy }} className="px-5 py-2 rounded-lg text-white text-[13px] font-medium shadow-sm active:scale-95 transition">
            Get started
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </nav>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        
        <div className="max-w-4xl flex flex-col items-center"> 
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.15] tracking-tight">
            Build a standout resume with <br />
            <span style={{ color: brandNavy }}>Intelligent AI Assistance.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm md:text-base mt-6 max-w-lg leading-relaxed font-normal">
            Our AI analyzes job descriptions and tailors your resume <br className="hidden md:block" /> 
            to pass ATS filters and impress recruiters instantly.
          </p>

          {/* Action Buttons - First */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <button style={{ backgroundColor: brandNavy }} className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white text-sm font-semibold shadow-lg shadow-blue-900/10 active:scale-95 transition">
              Start Building Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            
            <button className="px-8 py-3.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              Watch Demo
            </button>
          </div>

          {/* Trusted Text - Now clearly at the bottom of the section */}
          <p className="mt-16 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">
            Trusted by Job Seekers at Leading Tech Firms
          </p>

        </div>
      </main>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
          <button onClick={() => setMobileOpen(false)} className="self-end text-3xl text-slate-400">&times;</button>
          <div className="flex flex-col gap-8 text-xl font-bold mt-10">
            <a href="#">Home</a>
            <a href="#">AI Features</a>
            <a href="#">Templates</a>
            <button style={{ backgroundColor: brandNavy }} className="text-white py-4 rounded-lg text-base">Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;