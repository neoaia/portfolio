import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import arrowCircle from "../assets/arrowcircle.svg";

interface TopPicksTileProps {
    index: string;
    name: string;
    subtitle: string;
    position?: string;
    year: string;
    image: string;
    onClick?: () => void;
}

export interface TopPicksTileHandle {
    reset: () => void;
}

export const TopPicksTile = forwardRef<TopPicksTileHandle, TopPicksTileProps>(
    ({ index, name, year, image, onClick }, ref) => {
        const tileRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            reset: () => {
                const el = tileRef.current;
                if (!el) return;
                el.style.transition = "opacity 0.3s ease";
                el.style.transform = "translateY(60px)";
                el.style.opacity = "0";
            },
        }));

        useEffect(() => {
            const el = tileRef.current;
            if (!el) return;

            el.style.transform = "translateY(60px)";
            el.style.opacity = "0";

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.style.transition = "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease";
                        el.style.transform = "translateY(0)";
                        el.style.opacity = "1";
                    }
                },
                { threshold: 0.2 }
            );

            observer.observe(el);
            return () => observer.disconnect();
        }, []);

        return (
            <div
                ref={tileRef}
                className="group relative border-2 border-black overflow-hidden cursor-pointer aspect-square"
                onClick={onClick}
            >
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:brightness-50"
                />

                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="flex items-start justify-between">
                        <span
                            className="text-pink font-bold"
                            style={{ fontFamily: "Geist, sans-serif", fontSize: "4vh", letterSpacing: "-0.04em" }}
                        >
                            {index}
                        </span>

                        {/* ── Ipinalit ang SVG dito ── */}
                        <img
                            src={arrowCircle}
                            alt="View"
                            className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110"
                            style={{
                                width: "4vh",
                                height: "4vh", 
                            }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <span
                            className="text-pink font-black leading-none filter-fuzzy-text"
                            style={{ fontFamily: "Geist, sans-serif", fontSize: "4vh", fontWeight: "bolder", letterSpacing: "-0.08em" }}
                        >
                            {name}
                        </span>
                        <span
                            className="text-pink filter-fuzzy-text"
                            style={{ fontFamily: "Geist, sans-serif", fontSize: "2vh", letterSpacing: "-0.04em", opacity: 0.7 }}
                        >
                            {year}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
);