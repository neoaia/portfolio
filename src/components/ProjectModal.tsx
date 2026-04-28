import { useEffect } from "react";

export interface ModalProject {
    name: string;
    shortDescription: string;
    subtitle: string | string[]; // Updated to accept string or array of strings
    position: string;
    year: string;
    techStack?: string[];
    image?: string;
    hasGithub?: boolean;
    hasFigma?: boolean;
    hasSite?: boolean;
    githubUrl?: string;
    figmaUrl?: string;
    siteUrl?: string;
}

interface ProjectModalProps {
    project: ModalProject | null;
    onClose: () => void;
}

function LinkButton({ href, label }: { href?: string; label: string }) {
    return (
        <a
            href={href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (!href) e.preventDefault(); }}
            className="group flex items-center gap-2 md:gap-3 border-2 border-black bg-black hover:bg-green transition-colors duration-200 px-4 md:px-7 py-2 md:py-3"
            style={{ textDecoration: "none" }}
        >
            <span
                className="text-pink group-hover:text-black font-bold transition-colors duration-200 select-none"
                style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "clamp(0.9rem, 2.5vh, 2.5vh)",
                    letterSpacing: "-0.05em",
                }}
            >
                {label}
            </span>
            <span
                className="text-pink group-hover:text-black transition-colors duration-200 inline-block"
                style={{ transform: "rotate(-135deg)", fontSize: "1rem", lineHeight: 1 }}
            >
                ↓
            </span>
        </a>
    );
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        if (!project) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        // Prevent body scroll when modal open
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    if (!project) return null;

    const hasLinks = project.hasGithub || project.hasFigma || project.hasSite;

    // Normalize subtitle to always be an array for rendering
    const paragraphs = Array.isArray(project.subtitle)
        ? project.subtitle
        : [project.subtitle];

    return (
        <div
            className="fixed inset-0 z-[200] flex items-end md:items-center justify-center"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black opacity-75" />

            <div
                className="relative z-10 bg-pink border-2 border-black w-full md:max-w-2xl md:mx-8 overflow-hidden flex flex-col"
                style={{
                    maxHeight: "92vh",
                    animation: "modalIn 0.3s cubic-bezier(0.22,1,0.36,1) both",
                    borderRadius: "0",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 z-20 text-black filter-fuzzy-text hover:bg-black hover:text-pink border-l-2 border-b-2 border-black transition-colors duration-200 font-bold bg-pink"
                    style={{
                        fontFamily: "Geist, sans-serif",
                        fontSize: "clamp(0.8rem, 2vh, 2vh)",
                        lineHeight: 1,
                        padding: "0.5em 0.8em",
                    }}
                >
                    ✕
                </button>

                {/* Scrollable area */}
                <div className="overflow-y-auto flex-1 scrollbar-hide">
                    {project.image && (
                        <div className="w-full overflow-hidden border-b-2 border-black" style={{ height: "clamp(180px, 40vh, 50vh)" }}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="px-5 md:px-8 pt-5 md:pt-6 pb-6 md:pb-8 flex flex-col gap-1">
                        <h2
                            className="text-black filter-fuzzy-text leading-none"
                            style={{
                                fontFamily: "Geist, sans-serif",
                                fontSize: "clamp(1.5rem, 4vh, 4vh)",
                                fontWeight: "bold",
                                letterSpacing: "-0.08em",
                            }}
                        >
                            {project.name}
                        </h2>

                        <div className="flex justify-between">
                            <span
                                className="text-black opacity-80"
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontSize: "clamp(0.75rem, 2vh, 2.2vh)",
                                    letterSpacing: "-0.06em",
                                }}
                            >
                                {project.position}
                            </span>
                            <span
                                className="text-black opacity-80"
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontSize: "clamp(0.75rem, 2vh, 2.2vh)",
                                    letterSpacing: "-0.06em",
                                }}
                            >
                                {project.year}
                            </span>
                        </div>

                        <div className="border-t-2 border-black my-3 md:my-4" />

                        {/* Updated Subtitle Section */}
                        <div className="flex flex-col gap-3">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-black leading-relaxed"
                                    style={{
                                        fontFamily: "Geist, sans-serif",
                                        fontSize: "clamp(0.85rem, 2vh, 2.2vh)",
                                        letterSpacing: "-0.04em",
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Tech Stack Section */}
                        {project.techStack && project.techStack.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-4 md:mt-5">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-black inline-flex items-center px-2 py-1 gap-1 shrink-0 text-pink font-bold text-xs md:text-sm"
                                        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.03em" }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sticky footer */}
                {hasLinks && (
                    <div className="shrink-0 border-t-2 border-black bg-pink px-5 md:px-8 py-3 md:py-4 flex flex-wrap gap-2 md:gap-3">
                        {project.hasGithub && <LinkButton href={project.githubUrl} label="GitHub" />}
                        {project.hasFigma && <LinkButton href={project.figmaUrl} label="Figma" />}
                        {project.hasSite && <LinkButton href={project.siteUrl} label="Live Site" />}
                    </div>
                )}
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: translateY(32px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
                @media (max-width: 767px) {
                    @keyframes modalIn {
                        from { opacity: 0; transform: translateY(100%); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                }
            `}</style>
        </div>
    );
};