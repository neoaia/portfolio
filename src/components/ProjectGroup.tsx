import { ProjectTile, type ProjectTileHandle } from "./ProjectTile";
import type { ModalProject } from "./ProjectModal";

type Project = {
    index: string;
    name: string;
    shortDescription: string;
    subtitle: string | string[];
    position: string;
    year: string;
    techStack?: string[];
    hasGithub?: boolean;
    hasFigma?: boolean;
    hasSite?: boolean;
    githubUrl?: string;
    figmaUrl?: string;
    siteUrl?: string;
};

type ProjectGroupProps = {
    title: string;
    projects: Project[];
    onTileMount?: (handle: ProjectTileHandle) => void;
    onTileClick?: (project: ModalProject) => void;
    unfinished?: boolean;
};

export const ProjectGroup = ({ title, projects, onTileMount, onTileClick, unfinished }: ProjectGroupProps) => (
    <div>
        <div
            className="text-black filter-fuzzy-text-title self-start pl-4 md:pl-9"
            style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(3rem, 13vw, 13vh)",
                fontWeight: "bolder",
                letterSpacing: "-0.08em",
            }}
        >
            {title}
        </div>
        {projects.map((p) => (
            <ProjectTile
                key={p.index}
                ref={(handle) => { if (handle) onTileMount?.(handle); }}
                index={p.index}
                name={p.name}
                shortDescription={p.shortDescription}
                subtitle={p.subtitle}
                year={p.year}
                unfinished={unfinished}
                onClick={() =>
                    onTileClick?.({
                        name: p.name,
                        shortDescription: p.shortDescription,
                        subtitle: p.subtitle,
                        position: p.position,
                        year: p.year,
                        techStack: p.techStack,
                        hasGithub: p.hasGithub,
                        hasFigma: p.hasFigma,
                        hasSite: p.hasSite,
                        githubUrl: p.githubUrl,
                        figmaUrl: p.figmaUrl,
                        siteUrl: p.siteUrl,
                    })
                }
            />
        ))}
    </div>
);