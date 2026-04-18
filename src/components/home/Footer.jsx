import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* Logo Section - White background box for Black Logo */}
        <div className="mb-8">
          <a href="/" className="flex items-center bg-white px-4 py-1.5 rounded-lg shadow-sm">
            <span className="text-[28px] font-bold tracking-tighter text-black">
              resume<span className="text-blue-600">.</span>
            </span>
          </a>
        </div>

        {/* Description - Keeping it white for the blue background */}
        <p className="text-center max-w-xl text-sm font-light leading-relaxed opacity-80 italic">
          Empowering your career with the most advanced AI resume builder. 
          Transform your experience into a professional story that lands interviews.
        </p>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-light opacity-50">
            © 2026 <span className="font-medium">resume.</span> All rights reserved.
          </div>
          
          <div className="flex gap-6 text-xs font-light opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer