import React from "react";

export interface BentoTileProps {
    label: string;
    sub: string;
    size: string;
    bgColor: string;
}

export const BentoTile: React.FC<BentoTileProps> = ({ label, sub, size, bgColor }) => {
    return (
        <div
            className={`${size} shrink-0 h-full flex  flex-col justify-end p-8`}
            style={{ background: bgColor }}
        >
            <span
                className="block text-pink font-black leading-none filter-fuzzy-text mb-2"
                style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "4vh",
                    fontWeight: "bolder",
                    letterSpacing: "-0.08em",
                }}
            >
                {label}
            </span>
            <span
                className="block text-pink filter-fuzzy-text"
                style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "2vh",
                    letterSpacing: "-0.04em",
                    opacity: 0.7,
                    textTransform: "uppercase",
                }}
            >
                {sub}
            </span>
        </div>
    );
};