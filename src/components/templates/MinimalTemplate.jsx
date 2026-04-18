const MinimalTemplate = ({ data, accentColor }) => {

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

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light break-words">

            {/* Header */}
            <header className="mb-10">

                <h1 className="text-4xl font-thin mb-2 tracking-wide">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                {/* ✅ Job Title */}
                {data.personal_info?.job_title && (
                    <p className="text-gray-600 text-sm mb-4">
                        {data.personal_info.job_title}
                    </p>
                )}

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">

                    {data.personal_info?.email && (
                        <span className="min-w-0 break-words">
                            {data.personal_info.email}
                        </span>
                    )}

                    {data.personal_info?.phone && (
                        <span className="min-w-0 break-words">
                            {data.personal_info.phone}
                        </span>
                    )}

                    {data.personal_info?.location && (
                        <span className="min-w-0 break-words">
                            {data.personal_info.location}
                        </span>
                    )}

                    {data.personal_info?.linkedin && (
                        <a
                            href={formatLink(data.personal_info.linkedin)}
                            target="_blank"
                            rel="noreferrer"
                            className="break-all hover:underline min-w-0"
                        >
                            {data.personal_info.linkedin}
                        </a>
                    )}

                    {/* ✅ GitHub */}
                    {data.personal_info?.github && (
                        <a
                            href={formatLink(data.personal_info.github)}
                            target="_blank"
                            rel="noreferrer"
                            className="break-all hover:underline min-w-0"
                        >
                            {data.personal_info.github}
                        </a>
                    )}

                    {data.personal_info?.website && (
                        <a
                            href={formatLink(data.personal_info.website)}
                            target="_blank"
                            rel="noreferrer"
                            className="break-all hover:underline min-w-0"
                        >
                            {data.personal_info.website}
                        </a>
                    )}
                </div>
            </header>

            {/* Summary */}
            {data.professional_summary && (
                <section className="mb-10">
                    <p className="text-gray-700 leading-relaxed">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience?.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Experience
                    </h2>

                    <div className="space-y-6">
                        {data.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between gap-4 items-start min-w-0">
                                    <h3 className="text-lg font-medium break-words min-w-0">
                                        {exp.position}
                                    </h3>

                                    <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
                                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-2">{exp.company}</p>

                                {exp.description && (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm break-words">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project?.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-6">
                        {data.project.map((proj, index) => (
                            <div key={index} className="flex flex-col gap-1">

                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-lg font-medium break-words">
                                        {proj.name || "Untitled Project"}
                                    </h3>

                                    {proj.link && (
                                        <a
                                            href={formatLink(proj.link)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[10px] text-blue-500 hover:underline border border-blue-200 px-1.5 py-0.5 rounded-sm"
                                        >
                                            🔗 LINK
                                        </a>
                                    )}
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed break-words">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education?.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between gap-4 items-start min-w-0">

                                <div className="min-w-0">
                                    <h3 className="font-medium break-words">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600 break-words">{edu.institution}</p>
                                    {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                                </div>

                                <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
                                    {formatDate(edu.graduation_date)}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills?.length > 0 && (
                <section>
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="text-gray-700 text-sm tracking-wide break-words">
                        {data.skills.join("  •  ")}
                    </div>
                </section>
            )}
        </div>
    );
};

export default MinimalTemplate;