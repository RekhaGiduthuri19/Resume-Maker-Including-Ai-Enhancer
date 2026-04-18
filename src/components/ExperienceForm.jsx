import React from 'react'
import { Plus, Trash2, Briefcase, Sparkles } from 'lucide-react'

const ExperienceForm = ({ data, onChange }) => {

    const addExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false
        };
        onChange([...data, newExperience])
    }

    const removeExperience = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated)
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                        Professional Experience
                    </h3>
                    <p className='text-sm text-gray-500'>Add your job experience</p>
                </div>
                <button 
                    onClick={addExperience}
                    className='flex items-center gap-2 px-3 py-1.5 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors'
                >
                    <Plus className="size-4" />
                    Add Experience
                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-8 text-gray-500 border-2 border-dashed border-gray-100 rounded-xl'>
                    <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No work experience added yet.</p>
                    <p className='text-sm'>Click "Add Experience" to get started.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((experience, index) => (
                        <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3 relative bg-white shadow-sm'>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase">Experience #{index + 1}</span>
                                <button onClick={() => removeExperience(index)} className="text-red-400 hover:text-red-600">
                                    <Trash2 className="size-4" />
                                </button>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <input 
                                    type="text" placeholder="Company (e.g. Google)"
                                    className="p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                                    value={experience.company}
                                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                />
                                <input 
                                    type="text" placeholder="Position (e.g. Full Stack Developer)"
                                    className="p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                                    value={experience.position}
                                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <input 
                                    type="date" 
                                    className="p-2 border border-gray-300 rounded text-sm outline-none"
                                    value={experience.start_date}
                                    onChange={(e) => updateExperience(index, 'start_date', e.target.value)}
                                />
                                <input 
                                    type="date" 
                                    disabled={experience.is_current}
                                    className="p-2 border border-gray-300 rounded text-sm outline-none disabled:bg-gray-50"
                                    value={experience.end_date}
                                    onChange={(e) => updateExperience(index, 'end_date', e.target.value)}
                                />
                            </div>

                            <label className='flex items-center gap-2 text-xs text-gray-600 cursor-pointer'>
                                <input 
                                    type="checkbox" 
                                    checked={experience.is_current}
                                    onChange={(e) => updateExperience(index, 'is_current', e.target.checked)}
                                />
                                Currently working here
                            </label>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-medium text-gray-700">Job Description</label>
                                    <button className="flex items-center gap-1 text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded border border-purple-100 hover:bg-purple-100">
                                        <Sparkles className="size-3" /> Enhance with AI
                                    </button>
                                </div>
                                <textarea 
                                    placeholder="Describe your key responsibilities..."
                                    rows={3}
                                    className="w-full p-2 border border-gray-300 rounded text-sm outline-none resize-none"
                                    value={experience.description}
                                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ExperienceForm;