import { User, Linkedin, Github, MapPin } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value })
    }

    return (
        <div className='space-y-6 animate-in fade-in duration-500'>
            <div>
                <h3 className='text-xl font-bold text-slate-800 tracking-tight'>Personal Information</h3>
                <p className='text-[12px] text-slate-400'>Fill in your details to update the preview.</p>
            </div>

            <div className='flex items-center gap-6 py-2'>
                <label className='relative cursor-pointer group'>
                    {data.image ? (
                        <img 
                            src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} 
                            alt="profile" 
                            className='w-20 h-20 rounded-full object-cover border-2 border-white shadow-md' 
                        />
                    ) : (
                        <div className='flex items-center justify-center w-20 h-20 bg-slate-50 border border-dashed border-slate-300 rounded-full text-slate-300 group-hover:border-emerald-300 transition-colors'>
                            <User className='size-8' />
                        </div>
                    )}
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleChange("image", e.target.files[0])} />
                </label>

                <div className='flex flex-col gap-1.5'>
                    <span className='text-[11px] font-bold text-slate-600 uppercase tracking-tighter'>Remove Background</span>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type="checkbox" className="sr-only peer" onChange={() => setRemoveBackground(prev => !prev)} checked={removeBackground} />
                        <div className="w-11 h-5.5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-4 pt-2'>
                <div className='grid grid-cols-2 gap-3'>
                    <InputField label="Full Name" value={data.full_name} onChange={(val) => handleChange('full_name', val)} placeholder="John Doe" />
                    <InputField label="Job Title" value={data.job_title} onChange={(val) => handleChange('job_title', val)} placeholder="Software Engineer" />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <InputField label="Email" value={data.email} onChange={(val) => handleChange('email', val)} placeholder="john@example.com" />
                    <InputField label="Phone" value={data.phone} onChange={(val) => handleChange('phone', val)} placeholder="+91..." />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <IconInput label="LinkedIn" icon={Linkedin} value={data.linkedin} onChange={(val) => handleChange('linkedin', val)} placeholder="linkedin.com/..." />
                    <IconInput label="GitHub" icon={Github} value={data.github} onChange={(val) => handleChange('github', val)} placeholder="github.com/..." />
                </div>
                <IconInput label="Location" icon={MapPin} value={data.location} onChange={(val) => handleChange('location', val)} placeholder="City, Country" />
            </div>
        </div>
    )
}

const InputField = ({ label, value, onChange, placeholder }) => (
    <div className='space-y-1'>
        <label className='text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1'>{label}</label>
        <input 
            type="text" 
            placeholder={placeholder}
            className='w-full px-3 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-emerald-500 transition-all text-slate-600 font-medium'
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
)

const IconInput = ({ label, icon: Icon, value, onChange, placeholder }) => (
    <div className='space-y-1'>
        <label className='text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1'>{label}</label>
        <div className='relative'>
            <Icon className='absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400' />
            <input 
                type="text" 
                placeholder={placeholder}
                className='w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-emerald-500 transition-all text-slate-600 font-medium'
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    </div>
)

export default PersonalInfoForm;