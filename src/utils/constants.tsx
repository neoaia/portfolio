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
import uiuxImg from "../assets/uiux.webp";
import webdevImg from "../assets/webdev.webp";
import mobiledevImg from "../assets/mobiledev.webp";
import deansImg from "../assets/deans.webp";
import nurtureImg from "../assets/nurtura.webp";
import networkingImg from "../assets/networking.webp";
import showcaseImg from "../assets/showcase.webp";
import workImg from "../assets/work.webp";
import nurtureTileImg from "../assets/tiles/nurtura.webp";
import portfolioTileImg from "../assets/tiles/portfolio.webp";
import butikaTileImg from "../assets/tiles/butika.webp";

const UIUX_OFFER = [
  { label: "Animation" },
  { label: "Wireframing" },
  { label: "Prototyping" },
  { label: "Modern" },
  { label: "Personalized" },
  { label: "Artistic" },
  { label: "Intuitive" },
];

const WEBDEV_OFFER = [
  { label: "Responsive Design" },
  { label: "Frontend Development" },
  { label: "API Integration" },
  { label: "Performance Optimization" },
  { label: "SEO Optimization" },
  { label: "Deployment" },
];

const MOBILEDEV_OFFER = [
  { label: "UI Implementation" },
  { label: "API Integration" },
  { label: "App Optimization" },
  { label: "Device Integration" },
  { label: "Deployment" },
];

export const OFFER_ITEMS: Array<
  | { type: "tile"; label: string; sub: string; size: string }
  | { type: "node"; node: React.ReactNode }
> = [
    {
      type: "node",
      node: <div className="hidden lg:block lg:w-[10vw]"></div>,
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[45vw] xl:w-[35vw] bg-black px-5 pb-6 pt-4 text-black overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-28 lg:h-28 xl:w-40 xl:h-40 shrink-0">
              <img src={uiuxImg} alt="UI/UX Design" className="w-full h-full object-contain object-left-top shrink-0" />
            </div>
            <div className="filter-fuzzy-text text-4xl lg:text-4xl xl:text-5xl font-bold text-pink text-right shrink-0">01</div>
          </div>
          <div className="text-pink flex flex-col gap-2 mt-auto">
            <div className="filter-fuzzy-text text-3xl lg:text-4xl xl:text-5xl font-bold text-pink">ui/ux design</div>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 text-black font-bold text-sm lg:text-base xl:text-lg">
              {UIUX_OFFER.map(({ label }) => (
                <div key={label} className="bg-pink inline-flex items-center px-2 gap-2 shrink-0">
                  <span className="shrink-0">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[45vw] xl:w-[35vw] bg-black px-5 pb-6 pt-4 text-black overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-28 lg:h-28 xl:w-40 xl:h-40 shrink-0">
              <img src={webdevImg} alt="Web Development" className="w-full h-full object-contain object-left-top shrink-0" />
            </div>
            <div className="filter-fuzzy-text text-4xl lg:text-4xl xl:text-5xl font-bold text-pink text-right shrink-0">02</div>
          </div>
          <div className="text-pink flex flex-col gap-2 mt-auto">
            <div className="filter-fuzzy-text text-3xl lg:text-4xl xl:text-5xl font-bold text-pink">web development</div>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 text-black font-bold text-sm lg:text-base xl:text-lg">
              {WEBDEV_OFFER.map(({ label }) => (
                <div key={label} className="bg-pink inline-flex items-center px-2 gap-2 shrink-0">
                  <span className="shrink-0">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[45vw] xl:w-[35vw] bg-black px-5 pb-6 pt-4 text-black overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex flex-row justify-between items-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-28 lg:h-28 xl:w-40 xl:h-40 shrink-0">
              <img src={mobiledevImg} alt="Mobile App Development" className="w-full h-full object-contain object-left-top shrink-0" />
            </div>
            <div className="filter-fuzzy-text text-4xl lg:text-4xl xl:text-5xl font-bold text-pink text-right shrink-0">03</div>
          </div>
          <div className="text-pink flex flex-col gap-2 mt-auto">
            <div className="filter-fuzzy-text text-3xl lg:text-4xl xl:text-5xl font-bold text-pink">mobile app development</div>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 text-black font-bold text-sm lg:text-base xl:text-lg">
              {MOBILEDEV_OFFER.map(({ label }) => (
                <div key={label} className="bg-pink inline-flex items-center px-2 gap-2 shrink-0">
                  <span className="shrink-0">{label}</span>
                </div>
              ))}
            </div>
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[30vw] xl:w-[22vw] bg-black px-5 pb-6 pt-4 text-black overflow-y-auto scrollbar-hide mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="filter-fuzzy-text text-3xl lg:text-4xl xl:text-5xl font-bold text-pink">
            education:
          </div>
          <div className="text-pink flex flex-col mt-auto text-sm lg:text-base xl:text-lg">
            <div className="font-bold text-base lg:text-lg xl:text-xl">University of Caloocan City</div>
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
        // DEAN'S LISTER: Gamit ang flex-col-reverse para umakyat ang label sa mobile!
        <div
          className="flex flex-col-reverse lg:flex-col gap-3 h-full w-full lg:w-[48vw] xl:w-[43vw] text-black mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
            <img src={deansImg} alt="deanslist picture" className="w-full h-full object-cover shrink-0" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 shrink-0">
            <div className="text-base lg:text-lg font-bold sm:mb-3 italic">in the photo:</div>
            <div className="sm:text-right">
              <div className="text-base lg:text-lg font-bold">
                Dean's Lister Achievement for 1st Semester of Junior Year
              </div>
              <div className="text-sm lg:text-base">January 23, 2026</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        // NURTURA: Label na talaga ang una sa code, kaya flex-col na lang.
        <div
          className="flex flex-col gap-3 h-full w-full lg:w-[48vw] xl:w-[43vw] text-black mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 shrink-0">
            <div className="text-base lg:text-lg font-bold sm:mb-3 italic">in the photo:</div>
            <div className="sm:text-right">
              <div className="text-base lg:text-lg font-bold">
                Software Engineering: Final Defense for "Nurtura"
              </div>
              <div className="text-sm lg:text-base">April 13, 2026</div>
            </div>
          </div>
          <div className="flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
            <img src={nurtureImg} alt="nurtura picture" className="w-full h-full object-cover shrink-0" />
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        // NETWORKING: Nasa ilalim ang label sa code, kaya flex-col-reverse ulit.
        <div
          className="flex flex-col-reverse lg:flex-col gap-3 h-full w-full lg:w-[45vw] xl:w-[40vw] text-black mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
            <img src={networkingImg} alt="networking competition" className="w-full h-full object-cover shrink-0" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 shrink-0">
            <div className="text-base lg:text-lg font-bold sm:mb-3 italic">in the photo:</div>
            <div className="sm:text-right">
              <div className="text-base lg:text-lg font-bold">
                1st Place – Networking Competition (CSD Fair)
              </div>
              <div className="text-sm lg:text-base">October 10, 2025</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        // SHOWCASE: Nasa taas na ang label sa code.
        <div
          className="flex flex-col gap-3 h-full w-full lg:w-[45vw] xl:w-[40vw] text-black mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 shrink-0">
            <div className="text-base lg:text-lg font-bold sm:mb-3 italic">in the photo:</div>
            <div className="sm:text-right">
              <div className="text-base lg:text-lg font-bold">
                Software Engineering: Project Showcase
              </div>
              <div className="text-sm lg:text-base">April 16, 2026</div>
            </div>
          </div>
          <div className="flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
            <img src={showcaseImg} alt="showcase picture" className="w-full h-full object-cover shrink-0" />
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: <div className="hidden lg:block lg:w-[5vw]"></div>
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[32vw] xl:w-[25vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="filter-fuzzy-text text-3xl lg:text-4xl xl:text-5xl font-bold">
            work experience:
          </div>
          <div className="flex flex-col mt-auto text-sm lg:text-base xl:text-lg">
            <div className="font-bold text-base lg:text-lg xl:text-xl">Teleperformance - Fairview Terraces</div>
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
        // WORK PHOTO: Nasa ilalim ang label sa code.
        <div
          className="flex flex-col-reverse lg:flex-col gap-3 h-full w-full lg:w-[32vw] xl:w-[22vw] text-black mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
            <img src={workImg} alt="work picture" className="w-full h-full object-cover shrink-0" />
          </div>
          <div className="bg-black text-pink px-5 pb-6 pt-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 shrink-0">
            <div className="text-base lg:text-lg font-bold sm:mb-3 italic">in the photo:</div>
            <div className="sm:text-right">
              <div className="text-base lg:text-lg font-bold">
                me at work haha
              </div>
              <div className="text-sm lg:text-base">December 23, 2025</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: (
        <div
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[24vw] xl:w-[18vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide mb-12 lg:mb-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-2xl xl:text-3xl font-bold">
            awards gained:
          </div>
          <div className="text-base lg:text-lg mt-auto">
            <div><b className="pr-2">01</b>Top Agent of the Month x3</div>
            <div><b className="pr-2">02</b>Top Trainee</div>
            <div><b className="pr-2">03</b>QAcers x5</div>
            <div><b className="pr-2">04</b>Engagement Winner x2</div>
          </div>
        </div>
      ),
    },
  ];


// =============================================================================
// #region SKILLS
// =============================================================================

const LANGUAGES = [
  { label: "C#" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "VB.NET" },
  { label: "PHP" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "SQL" },
];

const FRAMEWORKS = [
  { label: "React" },
  { label: "React Native" },
  { label: "Next.JS" },
  { label: "Angular" },
  { label: "Laravel" },
];

const TOOLS = [
  { label: "Git" },
  { label: "GitHub" },
  { label: "npm" },
  { label: "Visual Studio" },
  { label: "Visual Studio Code" },
  { label: "Vercel" },
];

const DATABASE = [
  { label: "MySQL" },
  { label: "SQLite" },
  { label: "Firebase" },
  { label: "Supabase" },
  { label: "PostgreSQL" },
  { label: "Microsoft Access" },
  { label: "MongoDB" },
];

const TOOLS_VISUALS = [
  { label: "Figma" },
  { label: "Canva" },
  { label: "Photoshop" },
  { label: "Illustrator" },
]

export const BENTO_ITEMS: Array<
  | { type: "tile"; label: string; sub: string; size: string }
  | { type: "node"; node: React.ReactNode }
> = [
    {
      type: "node",
      node: (
        // DITO TAYO NAG-APPLY NG flex-col-reverse lg:flex-col PARA UMAKYAT ANG "TECHNICAL"
        <div
          className="flex flex-col-reverse lg:flex-col h-full justify-between w-full lg:w-[32vw] xl:w-[25vw] text-pink gap-4 lg:gap-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          {/* LANGUAGES (Aakyat ito sa desktop, bababa sa mobile) */}
          <div className="bg-black px-5 pb-6 pt-4 h-full lg:h-auto overflow-y-auto scrollbar-hide flex-1">
            <div className="text-2xl lg:text-3xl font-bold mb-6 xl:mb-15">
              languages:
            </div>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 text-black font-bold text-sm lg:text-base xl:text-lg">
              {LANGUAGES.map(({ label }) => (
                <div key={label} className="bg-pink inline-flex items-center px-2 gap-2 shrink-0">
                  <span className="shrink-0">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL BANNER (Aakyat ito sa mobile, bababa sa desktop) */}
          <div className="bg-green p-6 flex items-center shrink-0">
            <div className="filter-fuzzy-text text-4xl lg:text-5xl xl:text-6xl text-pink font-bold">
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[24vw] xl:w-[18vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
            technologies:
          </div>
          <div className="text-black flex items-start justify-start flex-wrap gap-1 font-bold text-sm lg:text-base xl:text-lg mt-auto">
            {FRAMEWORKS.map(({ label }) => (
              <div key={label} className="bg-pink inline-flex items-center px-2 gap-2 shrink-0">
                <span className="shrink-0">{label}</span>
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[22vw] xl:w-[16vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold">tools:</div>
          <div className="flex flex-wrap gap-1 text-sm lg:text-base xl:text-lg mt-auto">
            {TOOLS.map(({ label }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center px-2 gap-2 font-bold shrink-0">
                <span className="shrink-0">{label}</span>
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[22vw] xl:w-[16vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold">database:</div>
          <div className="flex flex-wrap gap-1 text-sm lg:text-base xl:text-lg mt-auto">
            {DATABASE.map(({ label }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center px-2 gap-2 font-bold shrink-0">
                <span className="shrink-0">{label}</span>
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[22vw] xl:w-[16vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
            other:
          </div>
          <div className="text-sm lg:text-base xl:text-lg mt-auto">
            <div><b className="pr-2">01</b>JIRA</div>
            <div><b className="pr-2">02</b>Zendesk</div>
            <div><b className="pr-2">03</b>Amazon Connect</div>
            <div><b className="pr-2">04</b>Slack</div>
            <div><b className="pr-2">05</b>Maestro QA</div>
          </div>
        </div>
      ),
    },
    {
      type: "node",
      node: <div className="hidden lg:block lg:w-[5vw]"></div>,
    },
    {
      type: "node",
      node: (
        // DITO flex-col NA LANG DAHIL NAUNA NA TALAGA YUNG "VISUAL" SA CODE
        <div
          className="flex flex-col w-full lg:w-[32vw] xl:w-[25vw] h-full justify-between gap-4 lg:gap-0 mt-12 lg:mt-0"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          {/* VISUAL BANNER */}
          <div className="bg-green p-6 flex justify-start lg:justify-end items-center shrink-0">
            <div className="filter-fuzzy-text text-4xl lg:text-5xl xl:text-6xl text-pink font-bold">
              visual
            </div>
          </div>

          {/* TRAITS */}
          <div className="bg-black px-5 pb-6 pt-4 flex flex-col text-pink text-md flex-1 overflow-y-auto scrollbar-hide">
            <div className="flex flex-col justify-between gap-4 xl:gap-6 h-full">
              <div className="font-bold text-xl lg:text-2xl xl:text-3xl text-pink">traits:</div>
              <div className="text-sm lg:text-base flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-auto">
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[22vw] xl:w-[16vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-pink">tools:</div>
          <div className="flex flex-wrap gap-1 text-sm lg:text-base xl:text-lg mt-auto">
            {TOOLS_VISUALS.map(({ label }) => (
              <div key={label} className="bg-pink text-black inline-flex items-center px-2 gap-2 font-bold shrink-0">
                <span className="shrink-0">{label}</span>
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
          className="flex flex-col gap-3 h-full justify-between w-full lg:w-[22vw] xl:w-[16vw] bg-black px-5 pb-6 pt-4 text-pink overflow-y-auto scrollbar-hide"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
            inspo:
          </div>
          <div className="text-sm lg:text-base xl:text-lg mt-auto">
            <div><b className="pr-2">01</b>Pinterest</div>
            <div><b className="pr-2">02</b>Dribbble</div>
            <div><b className="pr-2">03</b>Behance</div>
            <div><b className="pr-2">04</b>Awwwards</div>
          </div>
        </div>
      ),
    },
  ];

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

    subtitle: [
      "A social networking platform allowing users to chat real-time and make public or anonymous posts.",
      "Instead of focusing on a single mission, the game emphasizes endurance, strategic movement, and score accumulation.",
      "The main goal of the player is to survive as long as possible while earning the highest possible score by defeating zombies and collecting antidotes."
    ],
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
    subtitle: [
      "A social networking platform allowing users to chat real-time and make public or anonymous posts.",
      "This project’s objective is to provide a social platform that creates a safe and friendly environment and to allow students and staff to communicate freely and anonymously.",
      "This website motivates them to open their expression, shares ideas, and gives them the ability to interact within their community in a virtual space."
    ],

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
    subtitle: [
      "A modern Point-of-Sale (POS) system designed specifically for HappyKopi that aims to streamline daily operations through an intuitive interface for order management, payment processing, and real-time inventory tracking.",
      "The system provides actionable sales insights for owners, enhancing business efficiency and customer service, all packaged in a dedicated application for SUNMI POS hardware.",
      "This project is designed to replace manual or outdated processes with a single, efficient, and user-friendly digital solution."
    ],
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
    subtitle: [
      "This innovative system has been designed to offer users a comprehensive overview of the food choices available within the premises of UCC as well as in the immediate vicinity of the campus.",
      "In essence, the system acts as a virtual menu, offering a view of the appetizing choices available. Users can seamlessly navigate through a wide array of food items, each accompanied by its corresponding price tag, enabling them to make well-informed decisions based on their budgetary constraints.",
      "The system allows users near UCC to explore a variety of affordable food options conveniently. It provides a comprehensive list of available food items, including prices, names, and stall details. Users can access this information effortlessly, making informed dining choices within their budget constraints."
    ],
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
    subtitle: [
      "A real-time IoT mobile app that allows user to see automation of plant care using live sensor data for watering and lighting.",
      "The system employs a hybrid architecture combining Event-Driven Architecture (EDA) for real-time IoT communication and Layered Architecture for structured system organization.",
      "The system allows users to add a farm to the system and customize their rack product, including the soil type, location, and maintenance preferences for each plant.",
      "The system utilizes real-time sensor data and predefined plant parameters to automatically manage watering and lighting, ensuring optimal growth conditions through a rule-based automation process.",
      "Also,  the system user receives real-time updates on environmental status and sensor/device maintenance needs. Alerts also include corrective suggestions for unusual conditions."
    ],

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
    image: nurtureTileImg,
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
    image: portfolioTileImg,
    hasSite: true,
    siteUrl: "https://neoisaiahnimo.com",
  },
  {
    index: "03",
    name: "ButiKa",
    shortDescription:
      "A system for managing pharmacy inventory, sales, and prescriptions.",
    subtitle: [
      "The Buti-Ka Pharmacy Management System organizes prescription, transactions, and stock management processes to enhance pharmacy operations workflow. In addition to enabling front-end and back-end pharmacy services, it provides essential capabilities for record-keeping, stock management, and decision-making.",
      "The system is limited to in-person payment, requiring customers to present the transaction details to the pharmacist using the receipt provided online."
    ],
    year: "2025",
    position: "Full-Stack Developer",
    techStack: ["C#", ".NET", "VB", "MySQL", "GitHub", "Visual Studio"],
    image: butikaTileImg,
    hasGithub: true,
    githubUrl: "https://github.com/zchuwie/butika-extension"
  },
];

// #endregion