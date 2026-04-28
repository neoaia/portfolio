import "./App.css";
import { useEffect, useRef, useState } from "react";
import { ProjectGroup } from "./components/ProjectGroup";
import { type ProjectTileHandle } from "./components/ProjectTile";
import { TopPicks } from "./components/TopPicks";
import { ProjectModal, type ModalProject } from "./components/ProjectModal";
import { BentoTile } from "./components/BentoTile";
import {
  MARQUEE_ITEMS,
  PROJECTS_DEV,
  PROJECTS_PROTOTYPING,
  PROJECT_UNFINISHED,
  TOP_PICKS,
  TYPING_WORDS,
  LANDING_ROLES,
  INSPIRE_WORDS,
  OFFER_ITEMS,
  EXPERIENCE_ITEMS,
  BENTO_ITEMS,
  PROJECTS_TRANSITION_WORD,
} from "./utils/constants";
import { type TopPicksTileHandle } from "./components/TopPicksTile";
import mePic from "./assets/me.png";

// =============================================================================
// #region ANIMATION CONSTANTS
// =============================================================================

const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

// #endregion

// =============================================================================
// #region HOOKS
// =============================================================================

function useTypingAnimation(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) return;

    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setIsPausing(true);
          setTimeout(() => { setIsPausing(false); setIsDeleting(true); }, PAUSE_AFTER_TYPE);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }, PAUSE_AFTER_DELETE);
        }
      }
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPausing, wordIndex, words]);

  return displayed;
}

// #endregion

// =============================================================================
// #region SVG FILTERS
// =============================================================================

function Filters() {
  return (
    <svg height="0" width="0" className="absolute">
      <defs>
        <filter id="fuzzy-name">
          <feMorphology operator="dilate" in="SourceGraphic" result="dilated" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feDisplacementMap in="dilated" in2="noise" scale="9" />
        </filter>
        <filter id="fuzzy-about">
          <feMorphology operator="dilate" radius="2" in="SourceGraphic" result="dilated" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise" />
          <feDisplacementMap in="dilated" in2="noise" scale="9" />
        </filter>
        <filter id="fuzzy-projects">
          <feMorphology operator="dilate" radius="2" in="SourceGraphic" result="dilated" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feDisplacementMap in="dilated" in2="noise" scale="9" />
        </filter>
        <filter id="fuzzy-text">
          <feMorphology operator="dilate" radius="0.3" in="SourceGraphic" result="dilated" />
          <feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="1" result="noise" />
          <feDisplacementMap in="dilated" in2="noise" scale="2" />
        </filter>
        <filter id="fuzzy-text-title">
          <feMorphology operator="dilate" radius="0.3" in="SourceGraphic" result="dilated" />
          <feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="1" result="noise" />
          <feDisplacementMap in="dilated" in2="noise" scale="5" />
        </filter>
      </defs>
    </svg>
  );
}

// #endregion

// =============================================================================
// #region HEADER
// =============================================================================

const Header = ({
  navMode,
  onNavClick,
}: {
  navMode: "black" | "blend";
  onNavClick: (tab: string) => void;
}) => {
  const isBlack = navMode === "black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-12 py-4 pointer-events-none transition-colors duration-500 ${isBlack ? "text-[#1E1E1E]" : "mix-blend-difference text-pink"
        }`}
    >
      <div
        className="font-bold text-xl tracking-tighter pointer-events-auto cursor-pointer"
        style={{ fontFamily: "Geist, sans-serif" }}
        onClick={() => onNavClick("home")}
      >
        neoisaiahnimo*
      </div>
      <nav className="flex gap-10 pointer-events-auto">
        {["home", "about", "background", "skills", "projects", "contact"].map((tab) => (
          <span
            key={tab}
            onClick={() => onNavClick(tab)}
            className="text-sm uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity cursor-pointer"
            style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.05em" }}
          >
            {tab}
          </span>
        ))}
      </nav>
    </header>
  );
};

// #endregion

// =============================================================================
// #region SECTION — LANDING (fixed bg)
// =============================================================================

const LandingBg = ({
  innerRef,
  onWorkClick,
}: {
  innerRef: React.RefObject<HTMLElement | null>;
  onWorkClick: () => void;
}) => {
  const typedRole = useTypingAnimation(LANDING_ROLES);

  return (
    <section
      ref={innerRef}
      className="fixed top-0 left-0 w-full h-screen z-[1] bg-green flex items-center justify-center overflow-hidden"
    >
      {/* Marquee */}
      <div className="animate-marquee absolute flex whitespace-nowrap">
        {MARQUEE_ITEMS.map((name, i) => (
          <span key={i} className="marquee-item filter-fuzzy-name font-black text-black mx-8 shrink-0">
            {name}
          </span>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-15 left-0 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pointer-events-none z-10">

        {/* Typing role */}
        <div
          className="flex items-center text-black font-semibold text-5xl md:text-5xl tracking-widest"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em", fontStyle: "italic" }}
        >
          <span>{typedRole}</span>
          <span
            className="inline-block bg-black animate-blink ml-1"
            style={{ width: "0.08em", height: "0.85em", verticalAlign: "middle" }}
          />
        </div>

        {/* CTA button */}
        <button
          onClick={(e) => { e.stopPropagation(); onWorkClick(); }}
          className="border-2 border-black text-black px-10 py-4 tracking-widest text-lg md:text-xl font-bold gap-3 flex flex-row justify-center items-center group hover:bg-[#1E1E1E] hover:text-pink transition-colors duration-300 pointer-events-auto shrink-0 cursor-pointer"
          style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
        >
          <div>work with this guy</div>
          <span
            className="text-black group-hover:text-pink transition-colors duration-200 inline-block"
            style={{ transform: "rotate(-135deg)", fontSize: "2vh", lineHeight: 1 }}
          >
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};

// #endregion

// =============================================================================
// #region SECTION — ABOUT
// =============================================================================

const AboutSection = ({ ref }: { ref: React.RefObject<HTMLElement | null> }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section ref={ref} className="py-20 bg-black flex flex-row items-center min-h-screen pointer-events-auto overflow-hidden">

      {/* Left — image (slide in from left) */}
      <div
        className={`flex-1 flex flex-col items-center justify-center p-8 transition-all duration-[1200ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[15vw]"
          }`}
      >
        <img
          src={mePic}
          alt="Neo Isaiah Nimo"
          className="w-[30vw] max-w-[400px] h-auto object-cover"
        />
      </div>

      {/* Right — text (fade in) */}
      <div
        className={`flex-1 flex flex-col items-center justify-center p-8 transition-opacity duration-[1200ms] delay-300 ease-out ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex flex-col gap-12 max-w-2xl">
          <div className="text-pink" style={{ fontFamily: "Geist, sans-serif", fontSize: "4vh", lineHeight: "1.6" }}>
            Neo Isaiah Nimo{" "}
            <div className="inline" style={{ fontFamily: "Geist, sans-serif", fontSize: "1.8vh", lineHeight: "1.6" }}>
              (HE/HIM)
            </div>{" "}
            is a detail-oriented UI/UX designer and frontend developer with a strong passion for art
            and creativity. He specializes in <b className="italic">UI/UX Design</b>—crafting thoughtful, visually refined experiences and
            enjoys bringing ideas to life with a balance of precision and personality. Based in
            Caloocan City, Philippines, Neo is always ready to take on new creative challenges.
          </div>
          <div className="text-pink" style={{ fontFamily: "Geist, sans-serif", fontSize: "2vh", lineHeight: "1.4" }}>
            <b><i>MY MAIN TRAIT: </i></b>I LET MY PERSONALITY STAND OUT IN THE THINGS I DO.
          </div>
        </div>
      </div>
    </section>
  );
};

// #endregion

// =============================================================================
// #region SECTION — BACKGROUND + SKILLS (combined horizontal scroll)
// =============================================================================

// ── Custom JSX node card ──
const InlineNodeCard = ({ node }: { node: React.ReactNode }) => (
  <div className="h-full flex items-center shrink-0">
    {node}
  </div>
);

const CombinedHorizontalSection = ({
  sectionRef,
  trackRef,
  pinkSectionRef,
  offerBlockRef,
  expBlockRef,
  skillsBlockRef,
  offerHeadingRef,
  experienceHeadingRef,
  skillsHeadingRef,
  headingFadeRef0,
  headingFadeRef,
  headingFade2Ref,
  offerContent,
  experienceContent,
  skillsContent,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  pinkSectionRef: React.RefObject<HTMLDivElement | null>;
  offerBlockRef: React.RefObject<HTMLDivElement | null>;
  expBlockRef: React.RefObject<HTMLDivElement | null>;
  skillsBlockRef: React.RefObject<HTMLDivElement | null>;
  offerHeadingRef: React.RefObject<HTMLSpanElement | null>;
  experienceHeadingRef: React.RefObject<HTMLSpanElement | null>;
  skillsHeadingRef: React.RefObject<HTMLSpanElement | null>;
  headingFadeRef0: React.RefObject<HTMLDivElement | null>;
  headingFadeRef: React.RefObject<HTMLDivElement | null>;
  headingFade2Ref: React.RefObject<HTMLDivElement | null>;
  offerContent?: React.ReactNode;
  experienceContent?: React.ReactNode;
  skillsContent?: React.ReactNode;
}) => (
  <section ref={sectionRef} className="bg-pink pointer-events-auto" style={{ height: "1800vh" }}>
    <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

      {/* Unified horizontal track */}
      <div
        ref={trackRef}
        className="flex-1 flex flex-row h-full will-change-transform"
        style={{ transform: "translateX(0px)" }}
      >

        {/* ── PINK PANEL — Offer + Experience + Skills ── */}
        <div ref={pinkSectionRef} className="h-full flex flex-row items-center bg-pink shrink-0 px-12 pb-[5vh]" style={{ width: "max-content" }}>

          {/* Offer block */}
          <div ref={offerBlockRef} className="h-full flex flex-col justify-center relative">
            <div ref={headingFadeRef0} className="absolute top-13 left-0 pointer-events-none z-10 w-max will-change-transform">
              <span
                ref={offerHeadingRef}
                className="heading-background filter-fuzzy-about leading-none block"
                style={{ opacity: 0, transform: "translateY(60%)" }}
              >
                what i offer*
              </span>
            </div>
            <div className="flex flex-row items-stretch gap-6 mt-[30vh] h-[55vh]">
              {offerContent}
            </div>
          </div>

          {/* Spacer */}
          <div className="w-[15vw] shrink-0" />

          {/* Experience block */}
          <div ref={expBlockRef} className="h-full flex flex-col justify-center relative">
            <div ref={headingFadeRef} className="absolute top-13 left-0 pointer-events-none z-10 w-max will-change-transform">
              <span
                ref={experienceHeadingRef}
                className="heading-background filter-fuzzy-about leading-none block"
                style={{ opacity: 0, transform: "translateY(60%)" }}
              >
                background*
              </span>
            </div>
            <div className="flex flex-row items-stretch gap-6 mt-[30vh] h-[55vh]">
              {experienceContent}
            </div>
          </div>

          {/* Spacer */}
          <div className="w-[15vw] shrink-0" />

          {/* Skills block */}
          <div ref={skillsBlockRef} className="h-full flex flex-col justify-center relative pr-12">
            <div ref={headingFade2Ref} className="absolute top-13 left-0 pointer-events-none z-10 w-max will-change-transform">
              <span
                ref={skillsHeadingRef}
                className="heading-background filter-fuzzy-about leading-none block"
                style={{ opacity: 0, transform: "translateY(60%)" }}
              >
                skills*
              </span>
            </div>
            <div className="flex flex-row items-stretch gap-6 mt-[30vh] h-[55vh]">
              {skillsContent}
            </div>
          </div>
        </div>

        {/* ── BLACK PANEL — "projects:" transition text ── */}
        <div className="h-full flex items-center bg-black shrink-0" style={{ paddingLeft: "10vw", paddingRight: "100vw" }}>
          <div
            className="font-black text-pink flex leading-[0.82] filter-fuzzy-projects select-none"
            style={{
              fontSize: "clamp(5rem, 60vh, 60vh)",
              letterSpacing: "-0.065em",
              fontFamily: "Geist, sans-serif",
            }}
          >
            {PROJECTS_TRANSITION_WORD.split("").map((char, index) => (
              <span key={index} className="transition-letter inline-block will-change-transform">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// #endregion

// =============================================================================
// #region SECTION — PROJECTS
// =============================================================================

const ProjectsSection = ({
  ref,
  onTileMount,
  onPickMount,
  onTileClick,
  wordsRef,
}: {
  ref: React.RefObject<HTMLElement | null>;
  onTileMount: (handle: ProjectTileHandle) => void;
  onPickMount: (handle: TopPicksTileHandle) => void;
  onTileClick: (project: ModalProject) => void;
  wordsRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <section ref={ref} className="bg-pink relative flex items-start py-10 overflow-x-clip pointer-events-auto">

    {/* Project lists */}
    <div className="flex-1 flex flex-col">
      <TopPicks picks={TOP_PICKS} onPickClick={onTileClick} onTileMount={onPickMount} />
      <ProjectGroup title="Software" projects={PROJECTS_DEV} onTileMount={onTileMount} onTileClick={onTileClick} />
      <ProjectGroup title="Figma" projects={PROJECTS_PROTOTYPING} onTileMount={onTileMount} onTileClick={onTileClick} />
      <ProjectGroup title="Unfinished" projects={PROJECT_UNFINISHED} onTileMount={onTileMount} onTileClick={onTileClick} unfinished />
    </div>

    {/* Sticky "PROJECTS" side text */}
    <div className="sticky top-0 self-start h-screen flex flex-col items-center justify-center shrink-0 pr-[2vw] overflow-hidden">
      <div
        ref={wordsRef}
        className="projects-word filter-fuzzy-projects flex flex-col items-center justify-center cursor-default select-none"
      >
        <span style={{ transform: "translateX(150%)", opacity: 0 }}>PR</span>
        <span style={{ transform: "translateX(150%)", opacity: 0 }}>OJ</span>
        <span style={{ transform: "translateX(150%)", opacity: 0 }}>EC</span>
        <span style={{ transform: "translateX(150%)", opacity: 0 }}>TS</span>
      </div>
    </div>
  </section>
);

// #endregion

// =============================================================================
// #region SECTION — INSPIRE
// =============================================================================

const InspireSection = ({ ref }: { ref: React.RefObject<HTMLElement | null> }) => (
  <section ref={ref} className="bg-black relative pointer-events-auto" style={{ height: "400vh" }}>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-8">

      {/* Line 1 — fades in on enter */}
      <div
        id="inspire-line-1"
        className="text-pink font-semibold text-6xl md:text-6xl opacity-0"
        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
      >
        let's create something that has
      </div>

      {/* Line 2 — vertical slot-machine scroll */}
      <div
        id="inspire-line-2-container"
        className="mt-3 overflow-hidden text-pink font-black text-8xl md:text-[15rem] opacity-0 filter-fuzzy-name"
        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.06em", height: "1em", lineHeight: 1 }}
      >
        <div id="inspire-line-2-track" className="flex flex-col will-change-transform ease-out">
          {INSPIRE_WORDS.map((word, i) => (
            <div key={i} className="h-[1em] flex items-center justify-center shrink-0">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// #endregion

// =============================================================================
// #region SECTION — CONTACT (fixed bg)
// =============================================================================

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/neo.aia" },
  { label: "Instagram", href: "https://www.instagram.com/neo.isaiah/" },
  { label: "Pinterest", href: "https://ph.pinterest.com/neo_isaiah/" },
  { label: "GitHub", href: "https://github.com/neoaia" },
];

const CONTACT_LINKS = [
  {
    label: "neonimo123@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=neonimo123@gmail.com",
    mailto: false // Gawin nating false para pumasok yung target="_blank" logic mo
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neo-isaiah/",
    mailto: false
  },
  {
    label: "+63 992 683 7586",
    href: "tel:+639926837586",
    mailto: true
  },
];

const ContactBg = ({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) => {
  const typedWord = useTypingAnimation(TYPING_WORDS);

  return (
    <section
      ref={innerRef}
      className="fixed top-0 left-0 w-full h-screen z-0 bg-green flex items-end justify-start px-18 pb-28"
    >
      <span className="contact-heading filter-fuzzy-about text-black">
        wanna<br />
        <span>{typedWord}</span>
        <span
          className="inline-block bg-black animate-blink ml-1"
          style={{ width: "0.08em", height: "0.85em", verticalAlign: "middle" }}
        />
      </span>

      {/* Contact column — bottom right */}
      <div
        className="absolute bottom-28 right-12 flex flex-row gap-10 pointer-events-auto items-end"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <span
            className="text-lg font-bold uppercase text-black opacity-50 mb-1"
            style={{ letterSpacing: "0.15em" }}
          >
            Contact
          </span>
          {CONTACT_LINKS.map(({ label, href, mailto }) => (
            <a
              key={label}
              href={href}
              {...(!mailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-lg border-2 border-black text-black font-bold px-10 py-4 flex flex-row items-center justify-between gap-6 hover:bg-black hover:text-pink transition-colors duration-300 group"
              style={{ letterSpacing: "-0.05em", fontSize: "1rem" }}
            >
              <span className="text-black group-hover:text-pink text-lg">{label}</span>
              <span
                className="text-black group-hover:text-pink transition-colors duration-200 inline-block"
                style={{ transform: "rotate(-135deg)", fontSize: "3 vh", lineHeight: 1 }}
              >
                ↓
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 w-full px-12 py-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-black border-black border-t-2 bg-green font-bold text-sm tracking-widest uppercase pointer-events-auto"
        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.03em" }}
      >
        <span>
          © {new Date().getFullYear()}&nbsp;
          <div className="inline lowercase text-black text-xl px-2 py-1 mx-2 border-black border-2 rounded-2xl" style={{ fontFamily: "Fondamento, cursive" }}>
            neoisaiahnimo*
          </div>
          . All rights reserved.
        </span>
        {/* Social links in footer */}
        <div className="flex flex-row items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// #endregion

// =============================================================================
// #region APP
// =============================================================================

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Section refs ──
  const landingRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const combinedRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const inspireRef = useRef<HTMLElement>(null);
  const contactSpacerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // ── Combined horizontal scroll refs ──
  const combinedTrackRef = useRef<HTMLDivElement>(null);
  const pinkSectionRef = useRef<HTMLDivElement>(null);
  const offerBlockRef = useRef<HTMLDivElement>(null);
  const expBlockRef = useRef<HTMLDivElement>(null);
  const skillsBlockRef = useRef<HTMLDivElement>(null);
  const offerHeadingRef = useRef<HTMLSpanElement>(null);
  const experienceHeadingRef = useRef<HTMLSpanElement>(null);
  const skillsHeadingRef = useRef<HTMLSpanElement>(null);
  const headingFadeRef0 = useRef<HTMLDivElement>(null);
  const headingFadeRef = useRef<HTMLDivElement>(null);
  const headingFade2Ref = useRef<HTMLDivElement>(null);

  // ── Projects refs ──
  const projectsWordRef = useRef<HTMLDivElement>(null);
  const tileHandles = useRef<ProjectTileHandle[]>([]);
  const pickHandles = useRef<TopPicksTileHandle[]>([]);

  const collectTile = (handle: ProjectTileHandle) => { tileHandles.current.push(handle); };
  const collectPick = (handle: TopPicksTileHandle) => { pickHandles.current.push(handle); };

  // ── Modal state ──
  const [activeProject, setActiveProject] = useState<ModalProject | null>(null);
  const modalOpenRef = useRef(false);

  const openModal = (project: ModalProject) => { setActiveProject(project); modalOpenRef.current = true; };
  const closeModal = () => { setActiveProject(null); modalOpenRef.current = false; };

  // ── Nav color state ──
  const [navMode, setNavMode] = useState<"black" | "blend">("black");

  // ── Smooth scroll refs ──
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Smooth scroll loop
  // ---------------------------------------------------------------------------

  const animateScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const LERP = 0.085;
    const maxScroll = container.scrollHeight - container.clientHeight;
    targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));

    const diff = targetScrollRef.current - currentScrollRef.current;

    if (Math.abs(diff) < 0.5) {
      currentScrollRef.current = targetScrollRef.current;
      container.scrollTop = currentScrollRef.current;
      isScrollingRef.current = false;
      rafRef.current = null;
      return;
    }

    currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * LERP;
    container.scrollTop = currentScrollRef.current;
    rafRef.current = requestAnimationFrame(animateScroll);
  };

  const startScroll = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
      currentScrollRef.current = scrollRef.current?.scrollTop || 0;
      rafRef.current = requestAnimationFrame(animateScroll);
    }
  };

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Nav click / quick links
  // ---------------------------------------------------------------------------

  const handleNavClick = (tab: string) => {
    const container = scrollRef.current;
    if (!container) return;

    let target = 0;
    const vh = window.innerHeight;

    if (tab === "home") {
      target = 0;
    } else if (tab === "about") {
      target = aboutRef.current?.offsetTop || vh;
    } else if (tab === "background") {
      target = combinedRef.current?.offsetTop || vh * 2;
    } else if (tab === "skills") {
      if (combinedRef.current && combinedTrackRef.current && skillsBlockRef.current) {
        const track = combinedTrackRef.current;
        const maxTranslate = track.scrollWidth - window.innerWidth;
        const targetTX = skillsBlockRef.current.offsetLeft - 48;
        const progress = Math.min(1, Math.max(0, targetTX / maxTranslate));
        const combinedMax = combinedRef.current.offsetHeight - vh;
        target = combinedRef.current.offsetTop + progress * combinedMax;
      } else {
        target = (combinedRef.current?.offsetTop || vh * 2) + vh * 2;
      }
    } else if (tab === "projects") {
      target = projectsRef.current?.offsetTop || 0;
    } else if (tab === "contact") {
      target = container.scrollHeight - vh;
    }

    targetScrollRef.current = target;
    startScroll();
  };

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Wheel + touch scroll input
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const WHEEL_MULTIPLIER = 0.8;

    const onWheel = (e: WheelEvent) => {
      if (modalOpenRef.current) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      targetScrollRef.current += delta * WHEEL_MULTIPLIER;
      startScroll();
    };

    let lastTouchY = 0;
    let touchVelocity = 0;

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
      touchVelocity = 0;
      if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; isScrollingRef.current = false; }
      currentScrollRef.current = container.scrollTop;
      targetScrollRef.current = container.scrollTop;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (modalOpenRef.current) return;
      e.preventDefault();
      const y = e.touches[0].clientY;
      const delta = lastTouchY - y;
      touchVelocity = delta;
      lastTouchY = y;
      targetScrollRef.current += delta;
      startScroll();
    };

    const onTouchEnd = () => { targetScrollRef.current += touchVelocity * 8; };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Nav color + contact z-index + Inspire section
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    const landing = landingRef.current;
    const contact = contactRef.current;
    const spacer = contactSpacerRef.current;
    const inspire = inspireRef.current;

    if (!container || !landing || !contact || !spacer || !inspire) return;

    const handleScroll = () => {
      const st = container.scrollTop;
      const vh = window.innerHeight;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // Nav color
      setNavMode(st < vh * 0.8 || st > maxScroll - vh * 0.8 ? "black" : "blend");

      // Contact background z-index swap
      const spacerTop = spacer.getBoundingClientRect().top;
      if (spacerTop <= vh) {
        contact.style.zIndex = "1";
        landing.style.zIndex = "0";
      } else {
        landing.style.zIndex = "1";
        contact.style.zIndex = "0";
      }

      // Inspire animations
      const inspireRect = inspire.getBoundingClientRect();
      const line1 = inspire.querySelector("#inspire-line-1") as HTMLElement;
      const line2Container = inspire.querySelector("#inspire-line-2-container") as HTMLElement;
      const line2Track = inspire.querySelector("#inspire-line-2-track") as HTMLElement;

      if (line1 && line2Container && line2Track) {
        const enteringProgress = 1 - Math.max(0, Math.min(1, inspireRect.top / vh));

        // Line 1 fade + slide up
        if (enteringProgress > 0) {
          const op1 = Math.max(0, Math.min(1, (enteringProgress - 0.3) / 0.5));
          line1.style.opacity = op1.toString();
          line1.style.transform = `translateY(${(1 - op1) * 20}px)`;
        } else {
          line1.style.opacity = "0";
          line1.style.transform = "translateY(20px)";
        }

        // Line 2 slot machine
        const scrolledSticky = -inspireRect.top;
        const maxStickyScroll = inspire.offsetHeight - vh;

        if (scrolledSticky >= 0) {
          const stickyProgress = Math.max(0, Math.min(1, scrolledSticky / maxStickyScroll));
          line2Container.style.opacity = Math.max(0, Math.min(1, stickyProgress / 0.05)).toString();
          line2Track.style.transform = `translateY(-${stickyProgress * (INSPIRE_WORDS.length - 1)}em)`;
        } else {
          line2Container.style.opacity = "0";
          line2Track.style.transform = "translateY(0em)";
        }
      }
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — "PROJECTS" side text slide-in
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    const projects = projectsRef.current;
    const word = projectsWordRef.current;
    if (!container || !projects || !word) return;

    const handleScroll = () => {
      const sectionTop = projects.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const progress = 1 - Math.max(0, Math.min(1, sectionTop / vh));

      word.querySelectorAll("span").forEach((span, i) => {
        const delay = i * 0.15;
        const spanProgress = Math.max(0, Math.min(1, (progress - delay) / 0.5));
        (span as HTMLElement).style.transform = `translateX(${(1 - spanProgress) * 150}%)`;
        (span as HTMLElement).style.opacity = spanProgress.toString();
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Combined horizontal scroll + heading fade + letter lift
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    const section = combinedRef.current;
    const expHeading = experienceHeadingRef.current;
    const skillHeading = skillsHeadingRef.current;
    const offerHeading = offerHeadingRef.current;
    const track = combinedTrackRef.current;

    if (!container || !section || !track) return;

    let hasAnimatedIn = false;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top;
      const maxScroll = section.offsetHeight - vh;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      // Horizontal translate
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-(progress * maxTranslate)}px)`;

      // Heading slide-in (once on enter)
      if (!hasAnimatedIn && rect.top < vh * 0.8) {
        hasAnimatedIn = true;
        const animIn = (el: HTMLElement | null) => {
          if (!el) return;
          el.style.transition = "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease";
          el.style.transform = "translateY(0)";
          el.style.opacity = "1";
        };
        animIn(offerHeading);
        animIn(expHeading);
        animIn(skillHeading);
      }

      // Reset headings when scrolled back above
      if (rect.top > vh) {
        hasAnimatedIn = false;
        const reset = (el: HTMLElement | null) => {
          if (!el) return;
          el.style.transition = "none";
          el.style.transform = "translateY(60%)";
          el.style.opacity = "0";
        };
        reset(offerHeading);
        reset(expHeading);
        reset(skillHeading);
      }

      // Sticky heading offset
      const STICKY_LEFT = 48;
      const STICKY_RIGHT_P = 48;

      const clampOffset = (blockRef: React.RefObject<HTMLDivElement | null>, fadeRef: React.RefObject<HTMLDivElement | null>) => {
        if (!blockRef.current || !fadeRef.current) return;
        const blockRect = blockRef.current.getBoundingClientRect();
        const headerWidth = fadeRef.current.offsetWidth;
        const offset = Math.min(
          Math.max(0, STICKY_LEFT - blockRect.left),
          Math.max(0, blockRect.width - headerWidth - STICKY_RIGHT_P),
        );
        fadeRef.current.style.transform = `translateX(${offset}px)`;
      };

      clampOffset(offerBlockRef, headingFadeRef0);
      clampOffset(expBlockRef, headingFadeRef);
      clampOffset(skillsBlockRef, headingFade2Ref);

      // Letter lift effect
      const LIFT_THRESHOLD = window.innerWidth * 0.15;
      track.querySelectorAll<HTMLElement>(".transition-letter").forEach((letter) => {
        const left = letter.getBoundingClientRect().left;
        if (left < LIFT_THRESHOLD) {
          const dist = LIFT_THRESHOLD - left;
          letter.style.transform = `translateY(${-Math.pow(dist, 1.15) * 0.8}px) rotate(${-(dist * 0.05)}deg)`;
          letter.style.opacity = Math.max(0, 1 - dist / (LIFT_THRESHOLD * 1.5)).toString();
        } else {
          letter.style.transform = "translateY(0px) rotate(0deg)";
          letter.style.opacity = "1";
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // #endregion

  // ---------------------------------------------------------------------------
  // #region ANIMATION — Project tile reset on scroll up
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    const projects = projectsRef.current;
    if (!container || !projects) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          tileHandles.current.forEach((t) => t.reset());
          pickHandles.current.forEach((t) => t.reset());
        }
      },
      { root: container, threshold: 0 }
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  // #endregion

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div ref={scrollRef} className="portfolio-root scrollbar-hide overflow-y-scroll h-screen relative bg-black pointer-events-auto">
      <Header navMode={navMode} onNavClick={handleNavClick} />
      <Filters />

      {/* Fixed backgrounds (z-layered) */}
      <LandingBg innerRef={landingRef} onWorkClick={() => handleNavClick("contact")} />
      <ContactBg innerRef={contactRef} />

      {/* Scrollable content stack */}
      <div className="relative z-[2] pointer-events-none">
        <div className="h-screen" /> {/* Landing spacer */}

        <AboutSection ref={aboutRef} />

        <CombinedHorizontalSection
          sectionRef={combinedRef}
          trackRef={combinedTrackRef}
          pinkSectionRef={pinkSectionRef}
          offerBlockRef={offerBlockRef}
          expBlockRef={expBlockRef}
          skillsBlockRef={skillsBlockRef}
          offerHeadingRef={offerHeadingRef}
          experienceHeadingRef={experienceHeadingRef}
          skillsHeadingRef={skillsHeadingRef}
          headingFadeRef0={headingFadeRef0}
          headingFadeRef={headingFadeRef}
          headingFade2Ref={headingFade2Ref}
          offerContent={
            <>
              {OFFER_ITEMS.map((item, i) =>
                item.type === "node" ? (
                  <InlineNodeCard key={i} node={item.node} />
                ) : item.type === "tile" ? (
                  <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#1E1E1E" />
                ) : null
              )}
            </>
          }
          experienceContent={
            <>
              {EXPERIENCE_ITEMS.map((item, i) =>
                item.type === "node" ? (
                  <InlineNodeCard key={i} node={item.node} />
                ) : item.type === "tile" ? (
                  <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#1E1E1E" />
                ) : null
              )}
            </>
          }
          skillsContent={
            <>
              {BENTO_ITEMS.map((item, i) =>
                item.type === "node" ? (
                  <InlineNodeCard key={i} node={item.node} />
                ) : item.type === "tile" ? (
                  <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#849E17" />
                ) : null
              )}
            </>
          }
        />

        <ProjectsSection
          ref={projectsRef}
          onTileMount={collectTile}
          onPickMount={collectPick}
          onTileClick={openModal}
          wordsRef={projectsWordRef}
        />

        <InspireSection ref={inspireRef} />

        <div ref={contactSpacerRef} className="h-screen pointer-events-none" /> {/* Contact spacer */}
      </div>

      <ProjectModal project={activeProject} onClose={closeModal} />
    </div>
  );
}

export default App;

// #endregion