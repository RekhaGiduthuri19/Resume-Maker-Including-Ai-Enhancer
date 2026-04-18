import React from 'react'

const Title = ({ title, description }) => (
    <div className="text-center max-w-2xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    const [isHover, setIsHover] = React.useState(false)
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden py-6">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

            {/* Compact AI Badge */}
            <div className="w-fit flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-100 rounded-full px-4 py-1 shadow-sm mb-4">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#1E4BAF"/>
                </svg>
                <span>99% ATS Match Rate</span>
            </div>

            {/* Title Section */}
            <Title 
                title='Build your resume' 
                description='Our streamlined process helps you create a professional resume in minutes with intelligent assistance.'
            />

            <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-6 gap-8 mt-6">
                
                {/* Compact Image Section */}
                <div className="md:w-5/12 flex justify-center">
                    <img 
                        className="max-w-[320px] md:max-w-sm w-full drop-shadow-lg transition-transform duration-500 hover:scale-105" 
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" 
                        alt="AI Preview" 
                    />
                </div>
                
                {/* Tightened Feature Cards Section */}
                <div className="md:w-7/12 space-y-3" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className={`p-4 w-full max-w-md group-hover:bg-violet-50 border border-transparent group-hover:border-violet-200 flex gap-4 rounded-xl transition-all duration-300 ${!isHover ? 'border-violet-100 bg-violet-50/50' : ''}`}>
                            <div className="p-2.5 h-fit bg-white rounded-lg shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-violet-600"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">AI Keyword Analysis</h3>
                                <p className="text-[12px] text-slate-500 leading-snug">Instantly identify missing keywords to rank higher.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="p-4 w-full max-w-md group-hover:bg-green-50 border border-transparent group-hover:border-green-200 flex gap-4 rounded-xl transition-all duration-300">
                            <div className="p-2.5 h-fit bg-white rounded-lg shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-green-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">Smart Formatting</h3>
                                <p className="text-[12px] text-slate-500 leading-snug">Auto-adjust layouts for 100% ATS-friendly results.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer">
                        <div className="p-4 w-full max-w-md group-hover:bg-orange-50 border border-transparent group-hover:border-orange-200 flex gap-4 rounded-xl transition-all duration-300">
                            <div className="p-2.5 h-fit bg-white rounded-lg shadow-sm">
                                <svg className="stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">Instant PDF Export</h3>
                                <p className="text-[12px] text-slate-500 leading-snug">Generate resumes ready for top-tier companies.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features;