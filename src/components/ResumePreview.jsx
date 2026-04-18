import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

    // Ee function template ID ni batti correct component ni return chesthundhi
    const renderTemplate = () => {
        switch (template) {
            case 'modern':
                return <ModernTemplate data={data} accentColor={accentColor} />;
            
            case 'minimal':
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            
            case 'minimal_image':
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            
            case 'classic':
            default:
                // ID match avvakapothe default ga Classic template vasthundhi
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }

        
    }

    return (
        <div className={`bg-white shadow-2xl rounded-sm transition-all duration-300 min-h-[1050px] w-full overflow-hidden ${classes}`}>
            <div className="preview-container">
                {renderTemplate()}
            </div>
        </div>
    )
}

export default ResumePreview;