import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print' 
import { dummyResumeData } from '../assets/assets'
import { 
    ArrowLeftIcon, User, FileText, Briefcase, GraduationCap, 
    FolderIcon, Sparkles, ChevronLeft, ChevronRight,
    Download, Share2, Globe 
} from 'lucide-react'

// Components imports
import PersonalInfoForm from '../components/PersonalInfoForm';
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm'; 
import ProjectsForm from '../components/ProjectsForm';
import SkillsForm from '../components/SkillsForm';
import ResumePreview from '../components/ResumePreview';
import TemplateSelector from '../components/TemplateSelector';
import ColorPicker from '../components/ColorPicker'; 

const ResumeBuilder = () => {
    const { resumeId } = useParams()
    const componentRef = useRef(); 

    const [resumeData, setResumeData] = useState({
        _id: '',
        title: '',
        personal_info: {
            full_name: '',
            job_title: '',
            email: '',
            phone: '',
            image: null,
            linkedin: '',
            github: '',
            location: ''
        },
        professional_summary: "",
        experience: [],
        education: [],
        project: [], 
        skills: [],
        template: "classic",
        accent_color: "#3B82F6",
        public: false,
    })

    const [activeSectionIndex, setActiveSectionIndex] = useState(0)
    const [removeBackground, setRemoveBackground] = useState(false);

    const sections = [
        { id: "personal", name: "Personal Info", icon: User },
        { id: "summary", name: "Summary", icon: FileText },
        { id: "experience", name: "Experience", icon: Briefcase },
        { id: "education", name: "Education", icon: GraduationCap },
        { id: "projects", name: "Projects", icon: FolderIcon },
        { id: "skills", name: "Skills", icon: Sparkles },
    ]

    // --- Action Handlers ---

    // Exact ga nuvvu adigina browser print dialog vasthundi bro
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${resumeData.personal_info.full_name || 'My_Resume'}`,
        pageStyle: `
            @page { size: A4; margin: 0; }
            @media print {
                body { -webkit-print-color-adjust: exact; }
                .no-print { display: none !important; }
            }
        `
    });

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard! 🚀");
    };

    useEffect(() => {
        const resume = dummyResumeData.find(resume => resume._id === resumeId)
        if (resume) {
            setResumeData(resume)
            document.title = resume.title
        }
    }, [resumeId])

    return (
        <div className="min-h-screen bg-slate-50/30">
            {/* Header with Buttons */}
            <header className="max-w-7xl mx-auto px-10 py-8 flex justify-between items-center no-print">
                <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-400 hover:text-slate-600 font-medium transition-all group'>
                    <ArrowLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform" /> 
                    Back to Dashboard
                </Link>

                <div className='flex gap-4'>
                    <button onClick={handleShare} className='flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm'>
                        <Share2 className='size-4' /> Share
                    </button>

                    <button 
                        onClick={() => setResumeData(prev => ({...prev, public: !prev.public}))} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm border ${resumeData.public ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-slate-200 text-slate-600'}`}
                    >
                        <Globe className='size-4' /> {resumeData.public ? 'Public' : 'Private'}
                    </button>

                    <button 
                        onClick={handlePrint}
                        className='flex items-center gap-2 px-5 py-2 bg-emerald-500 rounded-lg text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-md'
                    >
                        <Download className='size-4' /> Download
                    </button>
                </div>
            </header>

            <main className='max-w-7xl mx-auto px-10 pb-12'>
                <div className='grid lg:grid-cols-12 gap-10 items-start'>
                    
                    {/* Left Panel: Form Sections */}
                    <div className='lg:col-span-4 xl:col-span-4 no-print'>
                        <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative'>
                            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                                <div 
                                    className="h-full bg-emerald-500 transition-all duration-500" 
                                    style={{ width: `${((activeSectionIndex + 1) * 100) / sections.length}%` }} 
                                />
                            </div>

                            <div className='p-8 min-h-[550px] flex flex-col'>
                                <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                                    <div className='flex items-center gap-2'>
                                        <TemplateSelector 
                                            selectedTemplate={resumeData.template} 
                                            onChange={(template) => setResumeData(prev => ({ ...prev, template }))} 
                                        />
                                        <ColorPicker 
                                            selectedColor={resumeData.accent_color} 
                                            onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color }))} 
                                        />
                                    </div>

                                    <div className='flex items-center gap-1'>
                                        <button 
                                            onClick={() => setActiveSectionIndex(prev => Math.max(prev - 1, 0))} 
                                            className='p-2 rounded-full text-slate-300 hover:bg-slate-50 disabled:opacity-20 transition-colors'
                                            disabled={activeSectionIndex === 0}
                                        >
                                            <ChevronLeft className="size-5" />
                                        </button>
                                        <button 
                                            onClick={() => setActiveSectionIndex(prev => Math.min(prev + 1, sections.length - 1))} 
                                            className='flex items-center gap-1 py-1.5 px-4 rounded-full text-sm font-bold text-slate-500 hover:bg-slate-50 disabled:opacity-20 transition-colors'
                                            disabled={activeSectionIndex === sections.length - 1}
                                        >
                                            Next <ChevronRight className="size-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center text-slate-400 mb-6'>
                                    {React.createElement(sections[activeSectionIndex].icon, { className: "size-4" })}
                                    <span className='text-[10px] font-bold uppercase tracking-[0.2em]'>
                                        {sections[activeSectionIndex].name}
                                    </span>
                                </div>

                                <div className='flex-grow'>
                                    {activeSectionIndex === 0 && (
                                        <PersonalInfoForm 
                                            data={resumeData.personal_info} 
                                            onChange={(val) => setResumeData({...resumeData, personal_info: val})}
                                            removeBackground={removeBackground}
                                            setRemoveBackground={setRemoveBackground}
                                        />
                                    )}
                                    {activeSectionIndex === 1 && (
                                        <ProfessionalSummaryForm 
                                            data={resumeData.professional_summary} 
                                            onChange={(val) => setResumeData({...resumeData, professional_summary: val})}
                                            setResumeData={setResumeData}
                                        />
                                    )}
                                    {activeSectionIndex === 2 && (
                                        <ExperienceForm 
                                            data={resumeData.experience} 
                                            onChange={(val) => setResumeData({...resumeData, experience: val})}
                                        />
                                    )}
                                    {activeSectionIndex === 3 && (
                                        <EducationForm 
                                            data={resumeData.education} 
                                            onChange={(val) => setResumeData({...resumeData, education: val})}
                                        />
                                    )}
                                    {activeSectionIndex === 4 && (
                                        <ProjectsForm 
                                            data={resumeData.project || []} 
                                            onChange={(val) => setResumeData({...resumeData, project: val})}
                                        />
                                    )}
                                    {activeSectionIndex === 5 && (
                                        <SkillsForm 
                                            data={resumeData.skills || []} 
                                            onChange={(val) => setResumeData({...resumeData, skills: val})}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Preview Area */}
                    <div className='lg:col-span-8 xl:col-span-8 sticky top-10'>
                         <div ref={componentRef}>
                            <ResumePreview 
                                data={resumeData} 
                                template={resumeData.template} 
                                accentColor={resumeData.accent_color}
                            />
                         </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ResumeBuilder;