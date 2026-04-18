import React, { useState } from 'react';
import { Layout, Check, Sparkles, AlignLeft, User, Briefcase, Award } from 'lucide-react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    { id: "classic", name: "Classic", preview: "A clean, traditional resume format with clear sections.", icon: <AlignLeft size={16}/> },
    { id: "modern", name: "Modern", preview: "Sleek design with strategic use of color and modern fonts.", icon: <Sparkles size={16}/> },
    { id: "minimal-image", name: "Minimal Image", preview: "Clean typography featuring a professional profile photo.", icon: <User size={16}/> },
    { id: "minimal", name: "Minimal", preview: "Ultra-clean design that focuses purely on content.", icon: <Layout size={16}/> },
    { id: "executive", name: "Executive", preview: "Designed for senior roles with a focus on achievements.", icon: <Briefcase size={16}/> },
    { id: "creative", name: "Creative", preview: "Bold colors and unique layouts for creative professionals.", icon: <Award size={16}/> },
    { id: "tech-focused", name: "Tech Focused", preview: "Optimized for developers with a sidebar for skills.", icon: <Layout size={16}/> },
    { id: "academic", name: "Academic (CV)", preview: "Detailed format for research and teaching history.", icon: <AlignLeft size={16}/> },
    { id: "startup", name: "Startup Ready", preview: "Fast-paced, high-impact layout for modern companies.", icon: <Sparkles size={16}/> },
    { id: "entry-level", name: "Entry Level", preview: "Focused on education and internships for graduates.", icon: <User size={16}/> }
  ];

  return (
    <div className="relative inline-block">
      {/* Template Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring-2 transition-all px-4 py-2.5 rounded-xl shadow-sm border border-blue-100 uppercase tracking-wider"
      >
        <Layout size={16} strokeWidth={2.5} />
        <span className="max-sm:hidden">Template</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          <div className="absolute left-0 mt-3 w-[320px] bg-white border border-slate-100 rounded-2xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-slate-50 bg-slate-50/50">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Select Resume Design</h3>
            </div>
            
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => {
                    onChange(template.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-4 flex items-start gap-4 hover:bg-blue-50/50 transition-all text-left border-b border-slate-50 last:border-0 group ${selectedTemplate === template.id ? 'bg-blue-50' : ''}`}
                >
                  <div className={`mt-0.5 p-2 rounded-lg ${selectedTemplate === template.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-black uppercase tracking-tight ${selectedTemplate === template.id ? 'text-blue-600' : 'text-slate-700'}`}>
                        {template.name}
                      </span>
                      {selectedTemplate === template.id && (
                        <div className="bg-blue-600 rounded-full p-0.5">
                          <Check size={10} className="text-white" strokeWidth={4} />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic">
                      {template.preview}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TemplateSelector;