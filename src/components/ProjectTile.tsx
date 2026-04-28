import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import arrowCircle from "../assets/arrowcircle.svg";

interface ProjectTileProps {
    index: string;
    name: string;
    shortDescription: string;
    subtitle: string;
    year: string;
    cover?: string;
    unfinished?: boolean;
    onClick?: () => void;
}

export interface ProjectTileHandle {
    reset: () => void;
}

export const ProjectTile = forwardRef<ProjectTileHandle, ProjectTileProps>(
    ({ index, name, shortDescription, year, unfinished, onClick }, ref) => {
        const tileRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            reset: () => {
                const el = tileRef.current;
                if (!el) return;
                el.style.transition = "background-color 0.3s ease, color 0.3s ease";
                el.style.transform = "translateX(-80px)";
                el.style.opacity = "0";
            },
        }));

        useEffect(() => {
            const el = tileRef.current;
            if (!el) return;

            el.style.transform = "translateX(-80px)";
            el.style.opacity = "0";

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.style.transition = "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease, background-color 0.3s ease, color 0.3s ease";
                        el.style.transform = "translateX(0)";
                        el.style.opacity = "1";
                    }
                },
                { threshold: 0.9 }
            );

            observer.observe(el);
            return () => observer.disconnect();
        }, []);

        return (
            <div
                ref={tileRef}
                className={`w-[97%] py-4 px-9 ${unfinished ? "bg-pink" : "group bg-pink hover:bg-green"}`}
                style={{
                    display: "grid",
                    gridTemplateColumns: "4rem 1fr auto",
                    columnGap: "2.5rem",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    cursor: unfinished ? "default" : "pointer",
                }}
                onClick={unfinished ? undefined : onClick}
            >
                {/* Index — fuzzy */}
                <div
                    className="text-black group-hover:text-pink filter-fuzzy-text self-center transition-colors duration-300"
                    style={{ fontFamily: "Geist, sans-serif", fontSize: "5vh", fontWeight: "bolder", letterSpacing: "-0.08em" }}
                >
                    {index}
                </div>

                {/* Name + Subtitle */}
                <div className="flex flex-col justify-center overflow-hidden">
                    {/* Name — fuzzy */}
                    <div
                        className="text-black group-hover:text-pink filter-fuzzy-text leading-normal  transition-colors duration-300 truncate"
                        style={{ fontFamily: "Geist, sans-serif", fontSize: "4vh", fontWeight: "bolder", letterSpacing: "-0.08em" }}
                    >
                        {name}
                    </div>
                    {/* Subtitle — no filter */}
                    <div
                        className="text-black group-hover:text-pink opacity-70 leading-normal transition-colors duration-300 truncate"
                        style={{ fontFamily: "Geist, sans-serif", fontSize: "2.5vh", letterSpacing: "-0.065em" }}
                    >
                        {shortDescription}
                    </div>
                </div>

                {/* ── Fixed Year + Expanding Arrow Container ── */}
                <div className="flex items-center justify-end">
                    {/* Year — fuzzy */}
                    <div
                        className="text-black group-hover:text-pink font-bold filter-fuzzy-text transition-colors duration-300 whitespace-nowrap"
                        style={{ fontFamily: "Geist, sans-serif", fontSize: "3vh", letterSpacing: "-0.08em" }}
                    >
                        {year}
                    </div>

                    {/* Expanding Arrow (Rendered only if finished) */}
                    {!unfinished && (
                        <div className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] grid-cols-[0fr] group-hover:grid-cols-[1fr] opacity-0 group-hover:opacity-100">
                            <div className="overflow-hidden flex items-center pl-10 pr-2 py-2">
                                <img
                                    src={arrowCircle}
                                    alt="View Project"
                                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{ width: "6vh", height: "6vh" }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
);