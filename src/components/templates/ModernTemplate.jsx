import { Mail, Phone, MapPin, Linkedin, Globe, ExternalLink, Github } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    const formatLink = (link) => {
        if (!link) return "";
        return link.startsWith("http") ? link : `https://${link}`;
    };

    const cleanLink = (link) => {
        return link?.replace(/^https?:\/\/(www\.)?/, '');
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 break-words">

            {/* HEADER */}
            <header className="p-8 text-white" style={{ backgroundColor: accentColor }}>

                <h1 className="text-4xl font-light mb-1">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                {/* ✅ Job Title */}
                {data.personal_info?.job_title && (
                    <p className="text-sm opacity-90 mb-4">
                        {data.personal_info.job_title}
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                    {data.personal_info?.email && (
                        <div className="flex items-start gap-2 min-w-0">
                            <Mail className="size-4" />
                            <span className="break-words">{data.personal_info.email}</span>
                        </div>
                    )}

                    {data.personal_info?.phone && (
                        <div className="flex items-start gap-2 min-w-0">
                            <Phone className="size-4" />
                            <span className="break-words">{data.personal_info.phone}</span>
                        </div>
                    )}

                    {data.personal_info?.location && (
                        <div className="flex items-start gap-2 min-w-0">
                            <MapPin className="size-4" />
                            <span className="break-words">{data.personal_info.location}</span>
                        </div>
                    )}

                    {data.personal_info?.linkedin && (
                        <a
                            href={formatLink(data.personal_info.linkedin)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-start gap-2 hover:underline min-w-0"
                        >
                            <Linkedin className="size-4" />
                            <span className="break-all text-xs">
                                {cleanLink(data.personal_info.linkedin)}
                            </span>
                        </a>
                    )}

                    {/* ✅ GitHub */}
                    {data.personal_info?.github && (
                        <a
                            href={formatLink(data.personal_info.github)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-start gap-2 hover:underline min-w-0"
                        >
                            <Github className="size-4" />
                            <span className="break-all text-xs">
                                {cleanLink(data.personal_info.github)}
                            </span>
                        </a>
                    )}

                    {data.personal_info?.website && (
                        <a
                            href={formatLink(data.personal_info.website)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-start gap-2 hover:underline min-w-0"
                        >
                            <Globe className="size-4" />
                            <span className="break-all text-xs">
                                {cleanLink(data.personal_info.website)}
                            </span>
                        </a>
                    )}
                </div>
            </header>

            <div className="p-8">

                {/* SUMMARY */}
                {data.professional_summary && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed break-words">
                            {data.professional_summary}
                        </p>
                    </section>
                )}

                {/* EXPERIENCE */}
                {data.experience?.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
                            Experience
                        </h2>

                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-gray-100">

                                    <div
                                        className="absolute -left-[5px] top-2 w-2 h-2 rounded-full"
                                        style={{ backgroundColor: accentColor }}
                                    />

                                    <div className="flex justify-between items-start flex-wrap gap-2 min-w-0">

                                        <div className="min-w-0">
                                            <h3 className="text-xl font-medium text-gray-900 break-words">
                                                {exp.position}
                                            </h3>
                                            <p className="font-medium break-words" style={{ color: accentColor }}>
                                                {exp.company}
                                            </p>
                                        </div>

                                        <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 whitespace-nowrap flex-shrink-0">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                        </div>
                                    </div>

                                    {exp.description && (
                                        <div className="text-gray-700 text-sm leading-relaxed mt-2 whitespace-pre-line break-words">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* PROJECTS */}
                {data.project?.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                            Projects
                        </h2>

                        <div className="space-y-6">
                            {data.project.map((p, index) => (
                                <div key={index} className="relative pl-6 border-l-2" style={{ borderLeftColor: accentColor }}>

                                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                                        <h3 className="text-lg font-medium text-gray-900 break-words">
                                            {p.name || "Untitled Project"}
                                        </h3>

                                        {p.link && (
                                            <a
                                                href={formatLink(p.link)}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center text-xs text-blue-600 hover:underline"
                                            >
                                                <ExternalLink size={12} className="mr-1" />
                                                View Project
                                            </a>
                                        )}
                                    </div>

                                    {p.description && (
                                        <div className="text-gray-700 text-sm mt-2 break-words">
                                            {p.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* EDUCATION + SKILLS */}
                <div className="grid sm:grid-cols-2 gap-8 mt-10">

                    {data.education?.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                                Education
                            </h2>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold break-words">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-sm font-medium break-words" style={{ color: accentColor }}>
                                            {edu.institution}
                                        </p>
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>{formatDate(edu.graduation_date)}</span>
                                            {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills?.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                                Skills
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium text-white rounded"
                                        style={{ backgroundColor: accentColor }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ModernTemplate;