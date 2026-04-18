import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Dummy data tirigi 3 items ki penchanu
  const [resumes, setResumes] = useState([
    { id: "101", title: "Senior Software Engineer", date: "Mar 20, 2026" },
    { id: "102", title: "Data Scientist Intern", date: "Mar 18, 2026" },
    { id: "103", title: "Product Designer Portfolio", date: "Mar 12, 2026" },
  ]);

  const handleCreate = () => {
    if (resumeTitle.trim()) {
      const newId = Date.now();
      navigate(`/app/builder/${newId}?title=${resumeTitle}`);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const deleteResume = (id) => {
    setResumes(resumes.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto pt-4">
        
        {/* Action Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Create Card - Hover scaling added */}
          <div className="relative group h-40 transition-transform duration-300 hover:-translate-y-1">
            <div 
              onClick={() => setShowTitleInput(true)}
              className={`absolute inset-0 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-indigo-400 ${showTitleInput ? 'opacity-0 invisible scale-95' : 'opacity-100 visible scale-100'}`}
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Create from scratch</h3>
            </div>

            {showTitleInput && (
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl p-6 flex flex-col justify-center animate-in fade-in zoom-in duration-300 shadow-indigo-200 shadow-2xl">
                <input 
                  autoFocus 
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                  placeholder="Enter Resume Title..." 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 outline-none mb-3 text-sm focus:bg-white/20 transition-all"
                />
                <div className="flex gap-4 items-center">
                  <button onClick={handleCreate} className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors">Create</button>
                  <button onClick={() => setShowTitleInput(false)} className="text-white/70 text-[10px] font-bold uppercase hover:text-white transition-colors">Cancel</button>
                </div>
              </div>
            )}
          </div>

          {/* Upload Card - Smooth states */}
          <div className="h-40 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
            {selectedFile ? (
              <div className="text-center animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slate-800 text-[11px] font-black truncate max-w-[180px] mb-3 uppercase tracking-tighter bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{selectedFile.name}</p>
                <div className="flex gap-3 justify-center">
                  <button onClick={() => navigate(`/app/builder/upload-${Date.now()}`)} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">Build</button>
                  <button onClick={() => setSelectedFile(null)} className="text-red-500 text-[9px] font-black uppercase tracking-widest hover:underline">Remove</button>
                </div>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <h3 className="text-sm font-black text-slate-800 mb-3 uppercase tracking-widest">Upload Existing</h3>
                <label className="bg-slate-100 text-slate-500 px-6 py-2 rounded-lg text-[10px] font-black cursor-pointer hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
                  Browse
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
              </>
            )}
          </div>
        </div>

        {/* Recent Projects with Staggered Visuals */}
        <div className="mt-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Recent Projects</h2>
            <div className="h-[1px] flex-1 bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div key={resume.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group relative">
                <button 
                  onClick={() => deleteResume(resume.id)}
                  className="absolute top-4 right-4 text-slate-200 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 duration-300"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div className="pr-4 overflow-hidden">
                    <h4 className="font-black text-slate-800 text-sm truncate uppercase tracking-tight">{resume.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-wider">{resume.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate(`/app/builder/${resume.id}`)}
                  className="w-full py-3 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase hover:bg-indigo-600 hover:text-white transition-all tracking-[0.15em] shadow-sm"
                >
                  Open Editor
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;