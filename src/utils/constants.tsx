import React from "react";
// =============================================================================
// #region MARQUEE / TYPING
// =============================================================================

export const MARQUEE_ITEMS = Array(20).fill("neoisaiahnimo*");

export const TYPING_WORDS = ["connect?", "chat?", "collab?", "work tgt?"];

// #endregion

// =============================================================================
// #region LANDING
// =============================================================================

export const LANDING_ROLES = [
  "frontend developer.",
  "ui/ux designer & specialist.",
  "graphic designer.",
];

// #endregion

// =============================================================================
// #region INSPIRE SECTION
// =============================================================================

export const INSPIRE_WORDS = [
  "soul.",
  "personality.",
  "love.",
  "depth.",
  "a meaning.",
  "intent.",
  "impact.",
  "class.",
  "aura.",
];

// #endregion


// =============================================================================
// #region OFFER
// =============================================================================
import uiuxImg from "../assets/uiux.png";
import webdevImg from "../assets/webdev.png";
import mobiledevImg from "../assets/mobiledev.png";

export const OFFER_ITEMS: Array<
  | { type: "tile"; label: string; sub: string; size: string }
  | { type: "node"; node: React.ReactNode }
> = [
    {
      type: "node",
      node: <div className="w-[10vw]"></div>,
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[35vw] bg-black px-5 pb-6 pt-4 text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <img src={uiuxImg} alt="UI/UX Design" className="w-40 h-40 object-cover" />
            <div className="filter-fuzzy-text text-5xl font-bold text-pink text-right">01</div>
          </div>
          <div className="text-pink flex flex-col gap-2">
            <div className="filter-fuzzy-text text-5xl font-bold text-pink">ui/ux design</div>
            <div className="text-xl">University of Caloocan City</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[35vw] bg-black px-5 pb-6 pt-4 text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <img src={webdevImg} alt="Web Development" className="w-40 h-40 object-cover" />
            <div className="filter-fuzzy-text text-5xl font-bold text-pink text-right">02</div>
          </div>
          <div className="text-pink flex flex-col gap-2">
            <div className="filter-fuzzy-text text-5xl font-bold text-pink">web development</div>
            <div className="text-xl">University of Caloocan City</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[35vw] bg-black px-5 pb-6 pt-4 text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <img src={mobiledevImg} alt="Mobile App Development" className="w-40 h-40 object-cover" />
            <div className="filter-fuzzy-text text-5xl font-bold text-pink text-right">03</div>
          </div>
          <div className="text-pink flex flex-col gap-2">
            <div className="filter-fuzzy-text text-5xl font-bold text-pink">mobile app development</div>
            <div className="text-xl">University of Caloocan City</div>
          </div>
        </div>
      ),
    },
  ];

// #endregion


// =============================================================================
// #region BACKGROUND / EXPERIENCE
// =============================================================================

export const EXPERIENCE_ITEMS: Array<
  | { type: "tile"; label: string; sub: string; size: string }
  | { type: "node"; node: React.ReactNode }
> = [
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[22vw] bg-black px-5 pb-6 pt-4 text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className=" filter-fuzzy-text text-5xl font-bold text-pink">
            education:
          </div>
          <div className="text-pink flex flex-col">
            <div className="font-bold text-xl">University of Caloocan City</div>
            <div className="italic">Bachelor of Science in Computer Science</div>
            <div className="mb-5">2023 - Present</div>
            <div>Caloocan City, Philippines</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full w-[43vw] text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-0">
            <img src="src/assets/deans.jpg" alt="deanslist picture" className="w-full h-full object-cover" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-row justify-between">
            <div className="text-lg font-bold mb-3 italic">in the photo:</div>
            <div className="text-right">
              <div className="text-lg font-bold">
                Dean's Lister Achievement for 1st Semester of Junior Year
              </div>
              <div>January 23, 2026</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full w-[43vw] text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-row justify-between">
            <div className="text-lg font-bold mb-3 italic">in the photo:</div>
            <div className="text-right">
              <div className="text-lg font-bold">
                Software Engineering: Final Defense for "Nurtura"
              </div>
              <div>April 13, 2026</div>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <img src="src/assets/nurtura.jpg" alt="nurtura picture" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full w-[40vw] text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-0">
            <img src="src/assets/networking.jpg" alt="deanslist picture" className="w-full h-full object-cover" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-row justify-between">
            <div className="text-lg font-bold mb-3 italic">in the photo:</div>
            <div className="text-right">
              <div className="text-lg font-bold">
                1st Place – Networking Competition (CSD Fair)
              </div>
              <div>October 10, 2025</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full w-[40vw] text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-row justify-between">
            <div className="text-lg font-bold mb-3 italic">in the photo:</div>
            <div className="text-right">
              <div className="text-lg font-bold">
                Software Engineering: Project Showcase
              </div>
              <div>April 16, 2026</div>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <img src="src/assets/showcase.jpg" alt="showcase picture" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div className="w-[10vw]"></div>
      )
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[25vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-5xl font-bold filter-fuzzy-text">
            work experience:
          </div>
          <div className=" flex flex-col">
            <div className="font-bold text-xl">Teleperformance - Fairview Terraces</div>
            <div className="italic">Customer Service Representative</div>
            <div className="mb-5">2024 - 2026</div>
            <div>Quezon City, Philippines</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full w-[22vw] text-black"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-0">
            <img src="src/assets/work.jpg" alt="deanslist picture" className="w-full h-full object-cover" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-row justify-between">
            <div className="text-lg font-bold mb-3 italic">in the photo:</div>
            <div className="text-right">
              <div className="text-lg font-bold">
                me at work haha
              </div>
              <div>December 23, 2025</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[18vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">
            awards gained:
          </div>
          <div>
            <div><b className="pr-2">01</b>Top Agent of the Month x3</div>
            <div><b className="pr-2">02</b>Top Trainee</div>
            <div><b className="pr-2">03</b>QAcers x5</div>
            <div><b className="pr-2">04</b>Engagement Winner x2</div>
          </div>
        </div>
      ),
    },
  ];

// #endregion

// =============================================================================
// #region SKILLS
// =============================================================================
import csharpSvg from "../assets/svg/csharp.svg";
import jsSvg from "../assets/svg/js.svg";
import typescriptSvg from "../assets/svg/typescript.svg";
import vbSvg from "../assets/svg/vb.svg";
import phpSvg from "../assets/svg/php.svg";
import htmlSvg from "../assets/svg/html.svg";
import cssSvg from "../assets/svg/css.svg";
import sqlSvg from "../assets/svg/sql.svg";

import reactSvg from "../assets/svg/react.svg";
import nextJsSvg from "../assets/svg/nextjs.svg";
import angularSvg from "../assets/svg/angular.svg";
import laravelSvg from "../assets/svg/laravel.svg";

// imports sa constants.tsx
import gitSvg from "../assets/svg/git.svg";
import githubSvg from "../assets/svg/github_white.svg";
import npmSvg from "../assets/svg/npm.svg";
import vsSvg from "../assets/svg/vs.svg";
import vscodeSvg from "../assets/svg/vscode.svg";
import vercelSvg from "../assets/svg/vercel_white.svg";

import firebaseSvg from "../assets/svg/firebase.svg";
import supabaseSvg from "../assets/svg/supabase.svg";
import postgresqlSvg from "../assets/svg/postgresql.svg";
import msaccessSvg from "../assets/svg/msacess.svg";
import mongodbSvg from "../assets/svg/mongodb.svg";

import figmaSvg from "../assets/svg/figma.svg";
import canvaSvg from "../assets/svg/canva.svg";
import photoshopSvg from "../assets/svg/photoshop.svg";
import illustratorSvg from "../assets/svg/illustrator.svg";

const LANGUAGES = [
  { label: "C#", icon: csharpSvg },
  { label: "JavaScript", icon: jsSvg },
  { label: "TypeScript", icon: typescriptSvg },
  { label: "VB.NET", icon: vbSvg },
  { label: "PHP", icon: phpSvg },
  { label: "HTML", icon: htmlSvg },
  { label: "CSS", icon: cssSvg },
  { label: "SQL", icon: sqlSvg },
];

const FRAMEWORKS = [
  { label: "React", icon: reactSvg },
  { label: "React Native", icon: reactSvg },
  { label: "Next.JS", icon: nextJsSvg },
  { label: "Angular", icon: angularSvg },
  { label: "Laravel", icon: laravelSvg },
];

const TOOLS = [
  { label: "Git", icon: gitSvg },
  { label: "GitHub", icon: githubSvg },
  { label: "npm", icon: npmSvg },
  { label: "Visual Studio", icon: vsSvg },
  { label: "Visual Studio Code", icon: vscodeSvg },
  { label: "Vercel", icon: vercelSvg },
];

const DATABASE = [
  { label: "MySQL", icon: null },
  { label: "SQLite", icon: null },
  { label: "Firebase", icon: firebaseSvg },
  { label: "Supabase", icon: supabaseSvg },
  { label: "PostgreSQL", icon: postgresqlSvg },
  { label: "Microsoft Access", icon: msaccessSvg },
  { label: "MongoDB", icon: mongodbSvg },
];

const TOOLS_VISUALS = [
  { label: "Figma", icon: figmaSvg },
  { label: "Canva", icon: canvaSvg },
  { label: "Photoshop", icon: photoshopSvg },
  { label: "Illustrator", icon: illustratorSvg },
]


export const BENTO_ITEMS: Array<
  | { type: "tile"; label: string; sub: string; size: string }
  | { type: "node"; node: React.ReactNode }
> = [
    {
      type: "node",
      node: (
        <div
          className="flex flex-col h-full justify-between w-[25vw] text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-black px-5 pb-6 pt-4">
            <div className="text-3xl font-bold mb-15">
              languages:
            </div>
            <div className="text-md flex flex-row flex-wrap gap-x-1 gap-y-1 text-black font-bold text-lg">
              {LANGUAGES.map(({ label, icon }) => (
                <div key={label} className="bg-pink inline-flex items-center p-1 gap-2">
                  <div className="bg-black rounded-sm p-1 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-5 h-5" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green p-6">
            <div className="text-6xl text-pink font-bold filter-fuzzy-text ">
              technical
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[18vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">
            technologies:
          </div>
          <div className="text-black flex items-start justify-start flex-wrap gap-1 font-bold text-lg">
            {FRAMEWORKS.map(({ label, icon }) => (
              <div key={label} className="bg-pink inline-flex items-center p-1 gap-2">
                {icon && (
                  <div className="bg-black rounded-sm p-1 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-5 h-5" />
                  </div>
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[16vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">tools:</div>
          <div className="flex flex-wrap gap-1">
            {TOOLS.map(({ label, icon }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center p-1 gap-2 font-bold text-lg">
                {icon && (
                  <div className="bg-black rounded-sm p-1 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-5 h-5" />
                  </div>
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[16vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">database:</div>
          <div className="flex flex-wrap gap-1">
            {DATABASE.map(({ label, icon }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center p-1 gap-2 font-bold text-lg">
                {icon && (
                  <div className="bg-black rounded-sm p-1 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-5 h-5" />
                  </div>
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[16vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">
            other:
          </div>
          <div>
            <div><b className="pr-2">01</b>JIRA</div>
            <div><b className="pr-2">02</b>Zendesk</div>
            <div><b className="pr-2">03</b>Amazon Connect</div>
            <div><b className="pr-2">03</b>Slack</div>
            <div><b className="pr-2">03</b>Maestro QA</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="w-[5vw]"
        >
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col w-[25vw] h-full justify-between"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-green p-6 flex justify-end items-center">
            <div className="text-6xl text-pink font-bold filter-fuzzy-text">
              visual
            </div>
          </div>

          <div className="bg-black px-5 pb-6 pt-4 flex flex-col  text-pink text-md">
            <div className="flex flex-col justify-between gap-6">
              <div className="font-bold text-3xl text-pink">traits:</div>
              <div className="text-md flex flex-row justify-between">
                <div>
                  <div><b className="pr-2">01</b>Consistent</div>
                  <div><b className="pr-2">02</b>Detail-oriented</div>
                  <div><b className="pr-2">03</b>Typography-focused</div>
                  <div><b className="pr-2">04</b>Disciplined</div>
                </div>
                <div>
                  <div><b className="pr-2">05</b>Expressive</div>
                  <div><b className="pr-2">06</b>User-focused</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[16vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold text-pink">tools:</div>
          <div className="flex flex-wrap gap-1">
            {TOOLS_VISUALS.map(({ label, icon }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center p-1 gap-2 font-bold text-lg">
                {icon && (
                  <div className="bg-black rounded-sm p-1 flex items-center justify-center">
                    <img src={icon} alt={label} className="w-5 h-5" />
                  </div>
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-[16vw] bg-black px-5 pb-6 pt-4 text-pink"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-3xl font-bold">
            inspo:
          </div>
          <div>
            <div><b className="pr-2">01</b>Pinterest</div>
            <div><b className="pr-2">02</b>Dribble</div>
            <div><b className="pr-2">03</b>Behance</div>
            <div><b className="pr-2">04</b>Awwwards</div>
          </div>
        </div>
      ),
    },
  ];

// #endregion

// =============================================================================
// #region PROJECTS TRANSITION
// =============================================================================

export const PROJECTS_TRANSITION_WORD = "projects:";

// #endregion

// =============================================================================
// #region PROJECTS — SOFTWARE
// =============================================================================

export const PROJECTS_DEV = [
  {
    index: "01",
    name: "Antidote Rush!",
    shortDescription:
      "A fast-paced zombie survival game focused on combat and anitdote collection.",
    subtitle:
      "A top-down p5.js web-based survival game where players fight waves of zombies while collecting antidotes across the map.",
    year: "2026",
    position: "Full-Stack Developer",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Supabase",
      "GitHub",
      "VS Code",
    ],
    hasGithub: true,
    githubUrl: "https://github.com/neoaia/AntidoteRush",
    hasSite: true,
    siteUrl: "https://antidote-rush.vercel.app",
  },
  {
    index: "02",
    name: "Yusisay",
    shortDescription:
      "A social platform for real-time chat and anonymous or public posting.",
    subtitle:
      "A social networking platform allowing users to chat real-time and make public or anonymous posts.",
    year: "2025",
    position: "Full-Stack Developer",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Pusher",
      "GitHub",
      "VS Code",
    ],
    hasGithub: true,
    githubUrl: "https://github.com/zchuwie/yusisay"
  },
  {
    index: "03",
    name: "HapiKopi POS (Client)",
    shortDescription:
      "A mobile POS system for managing sales, inventory, and cash flow insights.",
    subtitle:
      "An Android POS system built for HapiKopi that enables baristas to record sales, and admins to manage available items and see forecast of cashflows.",
    year: "2025",
    position: "Frontend Developer, UI/UX Designer",
    techStack: [
      "Android",
      "Angular",
      "MySQL",
      "C#",
      ".NET",
      "GitHub",
      "VS Code",
      "Visual Studio",
    ],
    hasGithub: true,
    githubUrl: "https://github.com/kzc0des/HappyKopi"
  },
  {
    index: "04",
    name: "UCC Food Tracker",
    shortDescription:
      "A campus food ordering system for browsing options and managing carts.",
    subtitle:
      "A WinForms campus food ordering interface for browsing available food options around the campus and managing carts.",
    year: "2023",
    position: "Frontend Developer",
    techStack: ["C#", ".NET", "MS Access", "GitHub", "Visual Studio"],
    hasGithub: true,
    githubUrl: "https://github.com/iamseaweedbrain/final-final-cartsystem"
  },
];

// #endregion

// =============================================================================
// #region PROJECTS — DESIGN / PROTOTYPING
// =============================================================================

export const PROJECTS_PROTOTYPING = [
  {
    index: "01",
    name: "Nurtura",
    shortDescription:
      "An IoT-based mobile app prototype for automated plant care.",
    subtitle: "UI/UX Design/Prototype for an Iot Mobile Application",
    year: "2025",
    position: "UI/UX Designer",
    techStack: ["Figma", "Pinterest", "Dribbble", "Google Fonts", "Canva"],
    hasFigma: true,
    figmaUrl: "https://www.figma.com/design/JrQautuvuPnyyKwSVNvEU7/Nurtura---Prototype--non-educ-?node-id=1393-2979&t=QRiF27FBLRQEDa6h-1"
  },
  {
    index: "02",
    name: "TaskLens",
    shortDescription:
      "A smart task management app concept designed for IoT integration.",
    subtitle: "UI/UX Design/Prototype for an Iot Mobile Application",
    year: "2025",
    position: "UI/UX Designer",
    techStack: ["Figma", "Pinterest", "Canva"],
    hasFigma: true,
    figmaUrl: "https://www.figma.com/design/GKvHFYri4k7SbQ4Leyd3of/TaskLens.---HCI-Prototype--Laptop-?node-id=0-1&t=iSnLy5GjK4a6mKnG-1"
  },
  {
    index: "03",
    name: "HapiKopi POS (Client)",
    shortDescription:
      "A mobile POS UI/UX prototype focused on usability and workflow.",
    subtitle: "UI/UX Design/Prototype for Mobile POS Application",
    year: "2025",
    position: "UI/UX Designer",
    techStack: ["Figma", "Pinterest", "Dribbble"],
    hasFigma: true,
    figmaUrl: "https://www.figma.com/design/BxZHp1Thvfwvwu0iSeKIw8/HappyKopi---POS?node-id=0-1&t=3c3opsYFxgLAzMEL-1"
  },
];

// #endregion

// =============================================================================
// #region PROJECTS — UNFINISHED
// =============================================================================

export const PROJECT_UNFINISHED = [
  {
    index: "01",
    name: "PockStreak",
    shortDescription:
      "A finance app for tracking expenses, savings, and automated cash flow.",
    subtitle:
      "A personal finance app for tracking savings, expenses, and cash flow using automation and templated approaches.",
    year: "--",
    position: "Full-Stack Developer",
    techStack: [
      "React Native",
      "Expo",
      "Supabase",
      "Tailwind CSS",
      "GitHub",
      "VS Code",
    ],
  },
  {
    index: "02",
    name: "sayitnow.com",
    shortDescription:
      "A messaging platform for sending, receiving, and storing user messages.",
    subtitle:
      "A social media platform that allows users to share or receive messages and store them in their account.",
    year: "--",
    position: "Full-Stack Developer",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "GitHub", "VS Code"],
  },
];

// #endregion

// =============================================================================
// #region PROJECTS — TOP PICKS
// =============================================================================

export const TOP_PICKS = [
  {
    index: "01",
    name: "Nurtura",
    shortDescription:
      "An IoT app for real-time plant care automation using sensor data.",
    subtitle:
      "A real-time IoT mobile app that allows user to see automation of plant care using live sensor data for watering and lighting.",
    year: "2026",
    position: "Lead Frontend Developer, Lead UI/UX Designer",
    techStack: [
      "React Native",
      "Firebase",
      "Expo",
      "Socket.IO",
      "TypeScript",
      "Tailwind CSS",
      "npm",
      "GitHub",
      "VS Code",
    ],
    image: "/src/assets/tiles/nurtura.png",
    hasGithub: true,
    githubUrl: "https://github.com/neoaia/nurtura-frontend",
  },
  {
    index: "02",
    name: "Portfolio",
    shortDescription:
      "A personal site showcasing projects, experience, and background.",
    subtitle:
      "A personal portfolio showcasing my background, experiences, and projects.",
    year: "2026",
    position: "Full-Stack Developer",
    techStack: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "npm",
      "GitHub",
      "VS Code",
    ],
    image: "/src/assets/tiles/portfolio.png",
    hasSite: true,
    siteUrl: "https://neoisaiahnimo.com",
  },
  {
    index: "03",
    name: "ButiKa",
    shortDescription:
      "A system for managing pharmacy inventory, sales, and prescriptions.",
    subtitle:
      "A pharmacy inventory and sales management system for browsing medicines, processing orders and prescriptions, and managing stocks.",
    year: "2025",
    position: "Full-Stack Developer",
    techStack: ["C#", ".NET", "VB", "MySQL", "GitHub", "Visual Studio"],
    image: "/src/assets/tiles/butika.png",
    hasGithub: true,
    githubUrl: "https://github.com/zchuwie/butika-extension"
  },
];

// #endregion