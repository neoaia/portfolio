import { useEffect } from "react";

export interface ModalProject {
    name: string;
    shortDescription: string;   
    subtitle: string;
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

// const TECH_ICONS: Record<string, string> = {
//     "Amazon Connect": "/src/assets/svg/amazonconnect.svg",
//     "Android": "/src/assets/svg/android.svg",
//     "Angular": "/src/assets/svg/angular.svg",
//     "Arduino": "/src/assets/svg/arduino.svg",
//     "Canva": "/src/assets/svg/canva.svg",
//     "Cloudflare": "/src/assets/svg/cloudflare.svg",
//     "C#": "/src/assets/svg/csharp.svg",
//     "CSS": "/src/assets/svg/css.svg",
//     ".NET": "/src/assets/svg/dotnet.svg",
//     "Dribbble": "/src/assets/svg/dribble.svg",
//     "Expo": "/src/assets/svg/expo.svg",
//     "Figma": "/src/assets/svg/figma.svg",
//     "Firebase": "/src/assets/svg/firebase.svg",
//     "Git": "/src/assets/svg/git.svg",
//     "GitHub": "/src/assets/svg/github.svg",
//     "Google Fonts": "/src/assets/svg/googlefonts.svg",
//     "HTML": "/src/assets/svg/html.svg",
//     "Java": "/src/assets/svg/java.svg",
//     "Jira": "/src/assets/svg/jira.svg",
//     "JavaScript": "/src/assets/svg/js.svg",
//     "Laravel": "/src/assets/svg/laravel.svg",
//     "LinkedIn": "/src/assets/svg/linkedin.svg",
//     "MongoDB": "/src/assets/svg/mongodb.svg",
//     "MS Access": "/src/assets/svg/msacess.svg",
//     "Node.js": "/src/assets/svg/nodedotjs.svg",
//     "npm": "/src/assets/svg/npm.svg",
//     "PHP": "/src/assets/svg/php.svg",
//     "Pinterest": "/src/assets/svg/pinterest.svg",
//     "PostgreSQL": "/src/assets/svg/postgresql.svg",
//     "Prettier": "/src/assets/svg/prettier.svg",
//     "Pusher": "/src/assets/svg/pusher.svg",
//     "React": "/src/assets/svg/react.svg",
//     "React Native": "/src/assets/svg/react.svg",
//     "Slack": "/src/assets/svg/slack.svg",
//     "Socket.IO": "/src/assets/svg/socket.svg",
//     "MySQL": "/src/assets/svg/sql.svg",
//     "SQL": "/src/assets/svg/sql.svg",
//     "Supabase": "/src/assets/svg/supabase.svg",
//     "Tailwind CSS": "/src/assets/svg/tailwind.svg",
//     "TypeScript": "/src/assets/svg/typescript.svg",
//     "Visual Basic": "/src/assets/svg/vb.svg",
//     "VB": "/src/assets/svg/vb.svg",
//     "Vercel": "/src/assets/svg/vercel.svg",
//     "Vite": "/src/assets/svg/vite.svg",
//     "Visual Studio": "/src/assets/svg/vs.svg",
//     "VS Code": "/src/assets/svg/vscode.svg",
//     "Zendesk": "/src/assets/svg/zendesk.svg",
// };

// function TechBadge({ tech }: { tech: string }) {
//     const icon = TECH_ICONS[tech];

//     if (icon) {
//         return (
//             <img
//                 src={icon}
//                 alt={tech}
//                 title={tech}
//                 style={{ width: "5vh", height: "5vh", objectFit: "contain", filter: "grayscale(100%)" }}
//             />
//         );
//     }

//     return (
//         <span
//             className="text-black"
//             style={{ fontFamily: "Geist, sans-serif", fontSize: "1.8vh", fontWeight: 600, letterSpacing: "-0.03em", opacity: 0.7 }}
//         >
//             {tech}
//         </span>
//     );
// }

function LinkButton({ href, label }: { href?: string; label: string }) {
    return (
        <a
            href={href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (!href) e.preventDefault(); }}
            className="group flex items-center gap-3 border-2 border-black bg-black hover:bg-green transition-colors duration-200 px-7 py-3"
            style={{ textDecoration: "none" }}
        >
            <span
                className="text-pink group-hover:text-black font-bold transition-colors duration-200 select-none"
                style={{ fontFamily: "Geist, sans-serif", fontSize: "2.5vh", letterSpacing: "-0.05em" }}
            >
                {label}
            </span>
            <span
                className="text-pink group-hover:text-black transition-colors duration-200 inline-block"
                style={{ transform: "rotate(-135deg)", fontSize: "2vh", lineHeight: 1 }}
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
        return () => window.removeEventListener("keydown", onKey);
    }, [project, onClose]);

    if (!project) return null;

    const hasLinks = project.hasGithub || project.hasFigma || project.hasSite;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black opacity-75" />

            <div
                className="relative z-10 bg-pink border-2 border-black w-full max-w-2xl mx-8 overflow-hidden flex flex-col"
                style={{
                    maxHeight: "90vh",
                    animation: "modalIn 0.3s cubic-bezier(0.22,1,0.36,1) both",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── X pinned to top-right of modal shell ── */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 z-20 text-black filter-fuzzy-text hover:bg-black hover:text-pink border-l-2 border-b-2 border-black transition-colors duration-200 font-bold bg-pink"
                    style={{
                        fontFamily: "Geist, sans-serif",
                        fontSize: "2vh",
                        lineHeight: 1,
                        padding: "0.5em 0.8em",
                    }}
                >
                    ✕
                </button>

                {/* ── Scrollable area ── */}
                <div className="overflow-y-auto flex-1 scrollbar-hide">
                    {project.image && (
                        <div className="w-full overflow-hidden border-b-2 border-black" style={{ height: "50vh" }}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="px-8 pt-6 pb-8 flex flex-col gap-1">
                        {/* Header */}
                        <h2
                            className="text-black filter-fuzzy-text leading-none"
                            style={{
                                fontFamily: "Geist, sans-serif",
                                fontSize: "4vh",
                                fontWeight: "bold",
                                letterSpacing: "-0.08em",
                            }}
                        >
                            {project.name}
                        </h2>

                        {/* Position + Year */}
                        <div className="flex justify-between">
                            <span
                                className="text-black opacity-80"
                                style={{ fontFamily: "Geist, sans-serif", fontSize: "2.2vh", letterSpacing: "-0.06em" }}
                            >
                                {project.position}
                            </span>
                            <span
                                className="text-black opacity-80"
                                style={{ fontFamily: "Geist, sans-serif", fontSize: "2.2vh", letterSpacing: "-0.06em" }}
                            >
                                {project.year}
                            </span>
                        </div>

                        <div className="border-t-2 border-black my-4" />

                        {/* Subtitle */}
                        <p
                            className="text-black leading-relaxed"
                            style={{ fontFamily: "Geist, sans-serif", fontSize: "2.2vh", letterSpacing: "-0.04em" }}
                        >
                            {project.subtitle}
                        </p>

                        {/* Tech Stack
                        {project.techStack && project.techStack.length > 0 && (
                            <div className="flex flex-wrap items-center gap-4 mt-1">
                                {project.techStack.map((tech, i) => (
                                    <TechBadge key={i} tech={tech} />
                                ))}
                            </div>
                        )} */}
                    </div>
                </div>

                {/* ── Sticky footer — only renders if there are links ── */}
                {hasLinks && (
                    <div className="shrink-0 border-t-2 border-black bg-pink px-8 py-4 flex flex-wrap gap-3">
                        {project.hasGithub && (
                            <LinkButton href={project.githubUrl} label="GitHub" />
                        )}
                        {project.hasFigma && (
                            <LinkButton href={project.figmaUrl} label="Figma" />
                        )}
                        {project.hasSite && (
                            <LinkButton href={project.siteUrl} label="Live Site" />
                        )}
                    </div>
                )}
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: translateY(32px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
            `}</style>
        </div>
    );
};