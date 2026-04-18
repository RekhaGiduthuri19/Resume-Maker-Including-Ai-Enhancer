import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    const formatLink = (link) => {
        if (!link) return "";
        return link.startsWith("http") ? link : `https://${link}`;
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-zinc-800 break-words overflow-hidden">
            <div className="grid grid-cols-3 gap-4">

                {/* IMAGE */}
                <div className="col-span-1 py-10 flex justify-center">
                    {data.personal_info?.image && (
                        <img
                            src={
                                typeof data.personal_info.image === "string"
                                    ? data.personal_info.image
                                    : URL.createObjectURL(data.personal_info.image)
                            }
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full"
                        />
                    )}
                </div>

                {/* NAME + JOB TITLE */}
                <div className="col-span-2 flex flex-col justify-center py-10 px-6 min-w-0">
                    <h1 className="text-4xl font-bold text-zinc-700 tracking-widest break-words">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>

                    <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest mt-2 break-words">
                        {data.personal_info?.job_title || "Job Title"}
                    </p>
                </div>

                {/* SIDEBAR */}
                <aside className="col-span-1 border-r border-zinc-300 p-6 space-y-8">

                    {/* CONTACT */}
                    <section>
                        <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                            CONTACT
                        </h2>

                        <div className="space-y-3 text-sm">

                            {data.personal_info?.phone && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <Phone size={14} style={{ color: accentColor }} />
                                    <span className="break-words min-w-0">
                                        {data.personal_info.phone}
                                    </span>
                                </div>
                            )}

                            {data.personal_info?.email && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <Mail size={14} style={{ color: accentColor }} />
                                    <span className="break-words min-w-0">
                                        {data.personal_info.email}
                                    </span>
                                </div>
                            )}

                            {data.personal_info?.location && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <MapPin size={14} style={{ color: accentColor }} />
                                    <span className="break-words min-w-0">
                                        {data.personal_info.location}
                                    </span>
                                </div>
                            )}

                            {data.personal_info?.linkedin && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <Linkedin size={14} style={{ color: accentColor }} />
                                    <a
                                        href={formatLink(data.personal_info.linkedin)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="break-all min-w-0 hover:underline"
                                    >
                                        {data.personal_info.linkedin}
                                    </a>
                                </div>
                            )}

                            {data.personal_info?.github && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <Github size={14} style={{ color: accentColor }} />
                                    <a
                                        href={formatLink(data.personal_info.github)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="break-all min-w-0 hover:underline"
                                    >
                                        {data.personal_info.github}
                                    </a>
                                </div>
                            )}

                            {data.personal_info?.website && (
                                <div className="flex gap-2 items-start min-w-0">
                                    <Globe size={14} style={{ color: accentColor }} />
                                    <a
                                        href={formatLink(data.personal_info.website)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="break-all min-w-0 hover:underline"
                                    >
                                        {data.personal_info.website}
                                    </a>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                                EDUCATION
                            </h2>

                            <div className="space-y-4 text-sm">
                                {data.education.map((edu, i) => (
                                    <div key={i}>
                                        <p className="font-semibold break-words">{edu.degree}</p>
                                        <p className="text-zinc-600 break-words">{edu.institution}</p>
                                        <p className="text-xs text-zinc-500">
                                            {formatDate(edu.graduation_date)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* SKILLS */}
                    {data.skills?.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                                SKILLS
                            </h2>

                            <ul className="space-y-1 text-sm">
                                {data.skills.map((s, i) => (
                                    <li key={i} className="break-words">{s}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </aside>

                {/* MAIN CONTENT */}
                <main className="col-span-2 p-6 space-y-8">

                    {/* SUMMARY */}
                    {data.professional_summary && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest mb-2" style={{ color: accentColor }}>
                                SUMMARY
                            </h2>
                            <p className="text-sm leading-relaxed break-words">
                                {data.professional_summary}
                            </p>
                        </section>
                    )}

                    {/* EXPERIENCE */}
                    {data.experience?.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                EXPERIENCE
                            </h2>

                            <div className="space-y-5">
                                {data.experience.map((exp, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between gap-4 items-start min-w-0">
                                            <h3 className="font-semibold break-words min-w-0">
                                                {exp.position}
                                            </h3>

                                            <span className="text-xs text-zinc-500 whitespace-nowrap flex-shrink-0">
                                                {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>

                                        <p className="text-sm mb-1" style={{ color: accentColor }}>
                                            {exp.company}
                                        </p>

                                        {exp.description && (
                                            <ul className="list-disc list-inside text-sm space-y-1">
                                                {exp.description.split("\n").map((line, idx) => (
                                                    <li key={idx} className="break-words">{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* PROJECTS */}
                    {data.project?.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                PROJECTS
                            </h2>

                            <div className="space-y-4">
                                {data.project.map((p, i) => (
                                    <div key={i}>
                                        <h3 className="font-semibold flex flex-wrap gap-2 break-words">
                                            {p.name}

                                            {p.link && (
                                                <a
                                                    href={formatLink(p.link)}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs text-blue-500 hover:underline"
                                                >
                                                    🔗 Link
                                                </a>
                                            )}
                                        </h3>

                                        {p.description && (
                                            <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                                                {p.description.split("\n").map((line, idx) => (
                                                    <li key={idx} className="break-words">{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </main>
            </div>
        </div>
    );
};

export default MinimalImageTemplate;