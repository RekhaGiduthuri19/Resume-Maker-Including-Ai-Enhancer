import React from 'react'
import { Plus, Trash2, FolderIcon, Sparkles, Link as LinkIcon } from 'lucide-react'

const ProjectsForm = ({ data = [], onChange }) => {

    const addProject = () => {
        const newProject = {
            name: "",
            link: "", // Kotha field
            description: "",
        };
        onChange([...data, newProject])
    }

    const removeProject = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateProject = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated)
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                        Projects
                    </h3>
                    <p className='text-sm text-gray-500'>Add your project details and links</p>
                </div>
                <button 
                    onClick={addProject}
                    className='flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'
                >
                    <Plus className="size-4" />
                    Add Project
                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-10 text-gray-500 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50'>
                    <FolderIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No projects added yet.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((project, index) => (
                        <div key={index} className='p-5 border border-gray-200 rounded-xl space-y-4 bg-white shadow-sm relative'>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Project {index + 1}</span>
                                <button onClick={() => removeProject(index)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-full transition-colors">
                                    <Trash2 className="size-4" />
                                </button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <input 
                                    type="text" 
                                    placeholder="Project Name"
                                    className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500"
                                    value={project.name || ""}
                                    onChange={(e) => updateProject(index, 'name', e.target.value)}
                                />
                                <div className='relative'>
                                    <LinkIcon className='absolute left-2.5 top-2.5 size-4 text-gray-400' />
                                    <input 
                                        type="text" 
                                        placeholder="Project Link (GitHub/Live)"
                                        className="w-full p-2 pl-9 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500"
                                        value={project.link || ""}
                                        onChange={(e) => updateProject(index, 'link', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-medium text-gray-500 ml-1">Description</label>
                                    <button className="flex items-center gap-1 text-[10px] bg-purple-50 text-purple-600 px-2 py-1 rounded-md hover:bg-purple-100 border border-purple-100">
                                        <Sparkles className="size-3" /> AI Help
                                    </button>
                                </div>
                                <textarea 
                                    placeholder="Describe your project..."
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none resize-none focus:ring-1 focus:ring-blue-500"
                                    value={project.description || ""}
                                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectsForm;