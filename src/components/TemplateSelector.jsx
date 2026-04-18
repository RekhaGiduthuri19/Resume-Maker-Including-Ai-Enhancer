import React, { useState } from 'react'
import { Layout, Check } from 'lucide-react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    // Folder lo unna anni templates list ikkada undi
    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview: "A clean, traditional resume format with clear sections"
        },
        {
            id: "modern",
            name: "Modern",
            preview: "Sleek design with strategic use of color and modern fonts"
        },
        {
            id: "minimal_image",
            name: "Minimal Image",
            preview: "Minimalist layout with a profile picture and clean typography"
        },
        {
            id: "minimal", // Kothaga add chesam
            name: "Minimal",
            preview: "Ultra-clean design that puts your content front and center"
        }
    ]

    return (
        <div className='relative'>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className='flex items-center gap-2 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-300 hover:ring-2 transition-all px-4 py-2 rounded-lg font-bold shadow-sm'
            >
                <Layout size={14} /> 
                <span className='max-sm:hidden'>Template</span>
            </button>

            {isOpen && (
                <div className='absolute top-full left-0 w-72 p-3 mt-2 space-y-2 z-50 bg-white rounded-xl border border-slate-200 shadow-2xl animate-in fade-in zoom-in duration-200'>
                    {templates.map((template) => (
                        <div 
                            key={template.id} 
                            onClick={() => {
                                onChange(template.id);
                                setIsOpen(false);
                            }} 
                            className={`relative p-3 border rounded-xl cursor-pointer transition-all hover:bg-slate-50 group ${
                                selectedTemplate === template.id 
                                ? 'border-blue-500 bg-blue-50/50 ring-1 ring-blue-500' 
                                : 'border-slate-100'
                            }`}
                        >
                            <div className='flex justify-between items-center mb-1'>
                                <h4 className={`font-bold text-sm ${selectedTemplate === template.id ? 'text-blue-600' : 'text-slate-700'}`}>
                                    {template.name}
                                </h4>
                                {selectedTemplate === template.id && (
                                    <div className='bg-blue-500 rounded-full p-0.5 shadow-sm'>
                                        <Check size={10} className='text-white' />
                                    </div>
                                )}
                            </div>
                            <p className='text-[10px] text-slate-400 leading-tight group-hover:text-slate-500'>
                                {template.preview}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TemplateSelector;