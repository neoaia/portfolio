import { TopPicksTile, type TopPicksTileHandle } from "./TopPicksTile";
import type { ModalProject } from "./ProjectModal";

type TopPick = {
    index: string;
    name: string;
    shortDescription: string;
    subtitle: string;
    year: string;
    position: string;
    techStack?: string[];
    image: string;
    hasGithub?: boolean;
    hasFigma?: boolean;
    hasSite?: boolean;
    githubUrl?: string;
    figmaUrl?: string;
    siteUrl?: string;
};

type TopPicksProps = {
    title?: string;
    picks: TopPick[];
    onPickClick?: (project: ModalProject) => void;
    onTileMount?: (handle: TopPicksTileHandle) => void;
};

export const TopPicks = ({ title = "favoritezz*", picks, onPickClick, onTileMount }: TopPicksProps) => (
    <div className="px-4 md:px-9 py-8 md:py-10">
        <div
            className="text-black filter-fuzzy-text-title self-start mb-4 md:mb-6"
            style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(3rem, 13vw, 13vh)",
                fontWeight: "bolder",
                letterSpacing: "-0.08em",
            }}
        >
            {title}
        </div>

        {/* 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {picks.slice(0, 3).map((pick, i) => (
                <TopPicksTile
                    key={i}
                    ref={(handle) => { if (handle) onTileMount?.(handle); }}
                    index={pick.index}
                    name={pick.name}
                    subtitle={pick.subtitle}
                    year={pick.year}
                    position={pick.position}
                    image={pick.image}
                    onClick={() =>
                        onPickClick?.({
                            name: pick.name,
                            shortDescription: pick.shortDescription,
                            subtitle: pick.subtitle,
                            year: pick.year,
                            position: pick.position,
                            techStack: pick.techStack,
                            image: pick.image,
                            hasGithub: pick.hasGithub,
                            hasFigma: pick.hasFigma,
                            hasSite: pick.hasSite,
                            githubUrl: pick.githubUrl,
                            figmaUrl: pick.figmaUrl,
                            siteUrl: pick.siteUrl,
                        })
                    }
                />
            ))}
        </div>
    </div>
);