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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return { isMobile, isTablet, isSmall: isMobile || isTablet };
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useIsMobile();

  const navItems = ["home", "about", "background", "skills", "projects", "contact"];

  const handleNav = (tab: string) => {
    setMenuOpen(false);
    onNavClick(tab);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-5 md:px-12 py-3 md:py-4 pointer-events-none transition-colors duration-500 ${isBlack ? "text-[#1E1E1E]" : "mix-blend-difference text-pink"}`}
      >
        <div
          className="font-bold text-base md:text-xl tracking-tighter pointer-events-auto cursor-pointer"
          style={{ fontFamily: "Geist, sans-serif" }}
          onClick={() => handleNav("home")}
        >
          neoisaiahnimo*
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav className="hidden md:flex gap-6 lg:gap-10 pointer-events-auto">
            {navItems.map((tab) => (
              <span
                key={tab}
                onClick={() => handleNav(tab)}
                className="text-sm uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.05em" }}
              >
                {tab}
              </span>
            ))}
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            className="pointer-events-auto flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 ${isBlack ? "bg-black" : "bg-pink"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 ${isBlack ? "bg-black" : "bg-pink"} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 ${isBlack ? "bg-black" : "bg-pink"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        )}
      </header>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full z-[99] bg-black transition-all duration-400 ease-in-out ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          style={{ paddingTop: "4rem" }}
        >
          <nav className="flex flex-col">
            {navItems.map((tab, i) => (
              <span
                key={tab}
                onClick={() => handleNav(tab)}
                className="text-pink text-2xl font-bold uppercase px-6 py-4 border-b border-pink/20 cursor-pointer hover:bg-green hover:text-black transition-colors duration-200"
                style={{
                  fontFamily: "Geist, sans-serif",
                  letterSpacing: "-0.05em",
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                {tab}
              </span>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

// #endregion

// =============================================================================
// #region SECTION — LANDING
// =============================================================================

const LandingBg = ({
  innerRef,
  onWorkClick,
}: {
  innerRef: React.RefObject<HTMLElement | null>;
  onWorkClick: () => void;
}) => {
  const typedRole = useTypingAnimation(LANDING_ROLES);
  const { isMobile } = useIsMobile();

  return (
    <section
      ref={innerRef}
      className="fixed top-0 left-0 w-full h-screen z-[1] bg-green flex items-center justify-center overflow-hidden"
    >
      {/* Marquee */}
      <div className="animate-marquee absolute flex whitespace-nowrap">
        {MARQUEE_ITEMS.map((name, i) => (
          <span
            key={i}
            className={`filter-fuzzy-name font-black text-black mx-4 md:mx-8 shrink-0 ${isMobile ? "marquee-item-mobile" : "marquee-item"}`}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 md:bottom-15 left-0 w-full px-5 md:px-12 flex flex-col gap-4 md:flex-row md:justify-between md:items-end pointer-events-none z-10">
        {/* Typing role */}
        <div
          className="flex items-center text-black font-semibold text-2xl md:text-5xl"
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
          className="border-2 border-black text-black px-6 md:px-10 py-3 md:py-4 text-base md:text-xl font-bold gap-3 flex flex-row justify-center items-center group hover:bg-[#1E1E1E] hover:text-pink transition-colors duration-300 pointer-events-auto shrink-0 cursor-pointer w-full md:w-auto"
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
  const { isMobile, isTablet } = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else if (entry.boundingClientRect.top > 0) setIsVisible(false);
      },
      { threshold: isMobile ? 0.15 : 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, isMobile]);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-black flex flex-col md:flex-row items-center min-h-screen pointer-events-auto overflow-hidden gap-0 md:gap-0"
    >
      {/* Image */}
      <div
        className={`w-full md:flex-1 flex flex-col items-center justify-center px-8 pt-16 md:pt-8 pb-6 md:pb-8 transition-all duration-[1200ms] ease-out ${isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : isMobile
            ? "opacity-0 translate-y-10"
            : "opacity-0 -translate-x-[15vw]"
          }`}
      >
        <img
          src={mePic}
          alt="Neo Isaiah Nimo"
          className={`object-cover ${isMobile ? "w-[70vw] max-w-[300px] h-auto" : isTablet ? "w-56 max-w-[280px] h-auto" : "w-[30vw] max-w-[400px] h-auto"}`}
        />
      </div>

      {/* Text */}
      <div
        className={`w-full md:flex-1 flex flex-col items-center justify-center px-6 md:px-8 pb-12 md:pb-8 transition-opacity duration-[1200ms] delay-300 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col gap-8 md:gap-12 max-w-2xl">
          <div
            className="text-pink text-lg md:text-2xl lg:text-[4vh] leading-relaxed"
            style={{ fontFamily: "Geist, sans-serif", lineHeight: "1.6" }}
          >
            Neo Isaiah Nimo{" "}
            <span className="inline text-sm md:text-base" style={{ fontFamily: "Geist, sans-serif" }}>
              (HE/HIM)
            </span>{" "}
            is a detail-oriented UI/UX designer and frontend developer with a strong passion for art
            and creativity. He specializes in <b className="italic">UI/UX Design</b>—crafting thoughtful,
            visually refined experiences and enjoys bringing ideas to life with a balance of precision and
            personality. Based in Caloocan City, Philippines.
          </div>
          <div
            className="text-pink text-sm md:text-base"
            style={{ fontFamily: "Geist, sans-serif", fontSize: isMobile ? "1.4vh" : "2vh", lineHeight: "1.4" }}
          >
            <b><i>MY MAIN TRAIT: </i></b>I LET MY PERSONALITY STAND OUT IN THE THINGS I DO.
          </div>
        </div>
      </div>
    </section>
  );
};

// #endregion

// =============================================================================
// #region SECTION — COMBINED HORIZONTAL (DESKTOP) / VERTICAL (MOBILE)
// =============================================================================

const InlineNodeCard = ({ node }: { node: React.ReactNode }) => (
  <div className="h-full flex items-center shrink-0">{node}</div>
);

// Mobile/tablet vertical version of the background & skills section
const MobileBackgroundSection = ({
  offerContent,
  experienceContent,
  skillsContent,
}: {
  offerContent?: React.ReactNode;
  experienceContent?: React.ReactNode;
  skillsContent?: React.ReactNode;
}) => (
  <section className="bg-pink pointer-events-auto">
    {/* What I Offer */}
    <div className="px-5 pt-12 pb-8">
      <h2
        className="text-black leading-none mb-8"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(2.5rem, 12vw, 6rem)",
          fontWeight: "bolder",
          letterSpacing: "-0.07em",
        }}
      >
        what i offer*
      </h2>
      <div className="flex flex-col gap-4">
        {offerContent}
      </div>
    </div>

    {/* Background */}
    <div className="px-5 pt-8 pb-8 bg-pink">
      <h2
        className="text-black leading-none mb-8"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(2.5rem, 12vw, 6rem)",
          fontWeight: "bolder",
          letterSpacing: "-0.07em",
        }}
      >
        background*
      </h2>
      <div className="flex flex-col gap-4">
        {experienceContent}
      </div>
    </div>

    {/* Skills */}
    <div className="px-5 pt-8 pb-12 bg-pink">
      <h2
        className="text-black leading-none mb-8"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(2.5rem, 12vw, 6rem)",
          fontWeight: "bolder",
          letterSpacing: "-0.07em",
        }}
      >
        skills*
      </h2>
      <div className="flex flex-col gap-4">
        {skillsContent}
      </div>
    </div>

    {/* Projects transition text */}
    <div className="bg-black py-16 px-5 flex items-center overflow-hidden">
      <div
        className="font-black text-pink leading-none select-none filter-fuzzy-text-title"
        style={{
          fontSize: "clamp(4rem, 22vw, 12rem)",
          letterSpacing: "-0.065em",
          fontFamily: "Geist, sans-serif",
        }}
      >
        projects:
      </div>
    </div>
  </section>
);

// Mobile-adapted offer item (overrides fixed widths from desktop constants)
const MobileOfferItem = ({ node }: { node: React.ReactNode }) => (
  <div className="mobile-card-wrap">{node}</div>
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
      <div
        ref={trackRef}
        className="flex-1 flex flex-row h-full will-change-transform"
        style={{ transform: "translateX(0px)" }}
      >
        {/* PINK PANEL */}
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

        {/* BLACK PANEL */}
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
}) => {
  const { isMobile } = useIsMobile();

  return (
    <section ref={ref} className="bg-pink relative flex items-start py-10 overflow-x-clip pointer-events-auto">
      <div className="flex-1 flex flex-col min-w-0">
        <TopPicks picks={TOP_PICKS} onPickClick={onTileClick} onTileMount={onPickMount} />
        <ProjectGroup title="Software" projects={PROJECTS_DEV} onTileMount={onTileMount} onTileClick={onTileClick} />
        <ProjectGroup title="Figma" projects={PROJECTS_PROTOTYPING} onTileMount={onTileMount} onTileClick={onTileClick} />
        <ProjectGroup title="Unfinished" projects={PROJECT_UNFINISHED} onTileMount={onTileMount} onTileClick={onTileClick} unfinished />
      </div>

      {/* Sticky "PROJECTS" side text — hidden on mobile */}
      {!isMobile && (
        <div className="sticky top-0 self-start h-screen hidden md:flex flex-col items-center justify-center shrink-0 pr-[2vw] overflow-hidden">
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
      )}
    </section>
  );
};

// #endregion

// =============================================================================
// #region SECTION — INSPIRE
// =============================================================================

const InspireSection = ({ ref }: { ref: React.RefObject<HTMLElement | null> }) => (
  <section ref={ref} className="bg-black relative pointer-events-auto" style={{ height: "400vh" }}>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-5 md:px-8">
      <div
        id="inspire-line-1"
        className="text-pink font-semibold text-2xl md:text-4xl lg:text-6xl opacity-0"
        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.065em" }}
      >
        let's create something that has
      </div>
      <div
        id="inspire-line-2-container"
        className="mt-2 md:mt-3 overflow-hidden text-pink font-black opacity-0 filter-fuzzy-name"
        style={{
          fontFamily: "Geist, sans-serif",
          letterSpacing: "-0.06em",
          height: "1em",
          lineHeight: 1,
          fontSize: "clamp(3rem, 15vw, 15rem)",
        }}
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
// #region SECTION — CONTACT
// =============================================================================

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/neo.aia" },
  { label: "Instagram", href: "https://www.instagram.com/neo.isaiah/" },
  { label: "Pinterest", href: "https://ph.pinterest.com/neo_isaiah/" },
  { label: "GitHub", href: "https://github.com/neoaia" },
];

const CONTACT_LINKS = [
  { label: "neonimo123@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=neonimo123@gmail.com", mailto: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/neo-isaiah/", mailto: false },
  { label: "+63 992 683 7586", href: "tel:+639926837586", mailto: true },
];

const ContactBg = ({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) => {
  const typedWord = useTypingAnimation(TYPING_WORDS);
  const { isMobile } = useIsMobile();

  return (
    <section
      ref={innerRef}
      className="fixed top-0 left-0 w-full h-screen z-0 bg-green overflow-hidden"
    >
      {/* "wanna connect?" heading — top-left on mobile, bottom-left on desktop */}
      <span
        className="contact-heading filter-fuzzy-about text-black absolute"
        style={{
          fontFamily: "Geist, sans-serif",
          ...(isMobile
            ? {
              top: "4rem",
              left: "1.25rem",
              right: "1.25rem",
              fontSize: "clamp(2.6rem, 13vw, 4.5rem)",
              lineHeight: 0.85,
            }
            : {
              bottom: "7rem",
              left: "4.5rem",
            }),
        }}
      >
        wanna<br />
        <span>{typedWord}</span>
        <span
          className="inline-block bg-black animate-blink ml-1"
          style={{ width: "0.08em", height: "0.85em", verticalAlign: "middle" }}
        />
      </span>

      {/* Contact links */}
      <div
        className="absolute pointer-events-auto"
        style={{
          fontFamily: "Geist, sans-serif",
          ...(isMobile
            ? { bottom: "5rem", left: "1.25rem", right: "1.25rem" }
            : { bottom: "7rem", right: "3rem" }),
        }}
      >
        <div className="flex flex-col gap-2">
          <span
            className="font-bold uppercase text-black opacity-50 mb-1"
            style={{ letterSpacing: "0.15em", fontSize: isMobile ? "0.7rem" : "1rem" }}
          >
            Contact
          </span>
          {CONTACT_LINKS.map(({ label, href, mailto }) => (
            <a
              key={label}
              href={href}
              {...(!mailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="border-2 border-black text-black font-bold flex flex-row items-center justify-between gap-4 hover:bg-black hover:text-pink transition-colors duration-300 group"
              style={{
                letterSpacing: "-0.05em",
                fontSize: isMobile ? "0.8rem" : "1rem",
                padding: isMobile ? "0.5rem 0.75rem" : "1rem 2.5rem",
              }}
            >
              <span className="text-black group-hover:text-pink">{label}</span>
              <span
                className="text-black group-hover:text-pink transition-colors duration-200 inline-block"
                style={{ transform: "rotate(-135deg)", fontSize: "1rem", lineHeight: 1 }}
              >
                ↓
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 w-full px-5 md:px-12 py-4 md:py-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4 text-black border-black border-t-2 bg-green font-bold text-xs md:text-sm tracking-widest uppercase pointer-events-auto"
        style={{ fontFamily: "Geist, sans-serif", letterSpacing: "-0.03em" }}
      >
        <span className="text-xs md:text-sm">
          © {new Date().getFullYear()}&nbsp;
          <span className="inline lowercase text-black px-1 md:px-2 py-0.5 md:py-1 mx-1 md:mx-2 border-black border-2 rounded-2xl text-base md:text-xl" style={{ fontFamily: "Fondamento, cursive" }}>
            neoisaiahnimo*
          </span>
          . All rights reserved.
        </span>
        <div className="flex flex-row items-center gap-3 md:gap-6 flex-wrap">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity duration-200 text-xs md:text-sm"
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
  const { isMobile, isTablet } = useIsMobile();
  const isSmall = isMobile || isTablet;

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
  // Smooth scroll loop
  // ---------------------------------------------------------------------------

  const animateScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const LERP = isSmall ? 0.12 : 0.085;
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
    currentScrollRef.current += diff * LERP;
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

  // ---------------------------------------------------------------------------
  // Nav click
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
      if (isSmall) {
        // On mobile the combined section is replaced; find the mobile section
        target = combinedRef.current?.offsetTop || vh * 2;
      } else {
        target = combinedRef.current?.offsetTop || vh * 2;
      }
    } else if (tab === "skills") {
      if (isSmall) {
        target = (combinedRef.current?.offsetTop || vh * 2) + vh * 2;
      } else if (combinedRef.current && combinedTrackRef.current && skillsBlockRef.current) {
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

  // ---------------------------------------------------------------------------
  // Wheel + touch scroll
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const WHEEL_MULTIPLIER = isSmall ? 1.0 : 0.8;

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
      // On mobile, allow natural scroll in horizontal section's children
      e.preventDefault();
      const y = e.touches[0].clientY;
      const delta = lastTouchY - y;
      touchVelocity = delta;
      lastTouchY = y;
      targetScrollRef.current += delta;
      startScroll();
    };

    const onTouchEnd = () => { targetScrollRef.current += touchVelocity * (isSmall ? 4 : 8); };

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
  }, [isSmall]);

  // ---------------------------------------------------------------------------
  // Nav color + contact z-index + Inspire
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

      setNavMode(st < vh * 0.8 || st > maxScroll - vh * 0.8 ? "black" : "blend");

      const spacerTop = spacer.getBoundingClientRect().top;
      if (spacerTop <= vh) {
        contact.style.zIndex = "1";
        landing.style.zIndex = "0";
      } else {
        landing.style.zIndex = "1";
        contact.style.zIndex = "0";
      }

      // Inspire
      const inspireRect = inspire.getBoundingClientRect();
      const line1 = inspire.querySelector("#inspire-line-1") as HTMLElement;
      const line2Container = inspire.querySelector("#inspire-line-2-container") as HTMLElement;
      const line2Track = inspire.querySelector("#inspire-line-2-track") as HTMLElement;

      if (line1 && line2Container && line2Track) {
        const enteringProgress = 1 - Math.max(0, Math.min(1, inspireRect.top / vh));
        if (enteringProgress > 0) {
          const op1 = Math.max(0, Math.min(1, (enteringProgress - 0.3) / 0.5));
          line1.style.opacity = op1.toString();
          line1.style.transform = `translateY(${(1 - op1) * 20}px)`;
        } else {
          line1.style.opacity = "0";
          line1.style.transform = "translateY(20px)";
        }

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

  // ---------------------------------------------------------------------------
  // "PROJECTS" side text slide-in (desktop only)
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (isSmall) return;
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
  }, [isSmall]);

  // ---------------------------------------------------------------------------
  // Combined horizontal scroll (desktop only)
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (isSmall) return;
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

      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-(progress * maxTranslate)}px)`;

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
  }, [isSmall]);

  // ---------------------------------------------------------------------------
  // Project tile reset on scroll up
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

  // ---------------------------------------------------------------------------
  // Shared content for offer/experience/skills sections
  // ---------------------------------------------------------------------------

  const offerContentDesktop = (
    <>
      {OFFER_ITEMS.map((item, i) =>
        item.type === "node" ? (
          <InlineNodeCard key={i} node={item.node} />
        ) : item.type === "tile" ? (
          <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#1E1E1E" />
        ) : null
      )}
    </>
  );

  const experienceContentDesktop = (
    <>
      {EXPERIENCE_ITEMS.map((item, i) =>
        item.type === "node" ? (
          <InlineNodeCard key={i} node={item.node} />
        ) : item.type === "tile" ? (
          <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#1E1E1E" />
        ) : null
      )}
    </>
  );

  const skillsContentDesktop = (
    <>
      {BENTO_ITEMS.map((item, i) =>
        item.type === "node" ? (
          <InlineNodeCard key={i} node={item.node} />
        ) : item.type === "tile" ? (
          <BentoTile key={i} label={item.label} sub={item.sub} size={item.size} bgColor="#849E17" />
        ) : null
      )}
    </>
  );

  // Helper: detect spacer-only nodes (divs with no meaningful children)
  const isSpacer = (node: React.ReactNode): boolean => {
    if (!node || typeof node !== "object") return false;
    const el = node as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
    if (el.type !== "div") return false;
    const children = el.props.children;
    return children === undefined || children === null || children === "";
  };

  // Mobile versions — filter out spacer nodes, wrap in full-width containers
  const offerContentMobile = (
    <div className="flex flex-col gap-4 w-full">
      {OFFER_ITEMS
        .filter(item => item.type === "node" && !isSpacer((item as { type: "node"; node: React.ReactNode }).node))
        .map((item, i) => (
          <MobileOfferItem key={i} node={(item as { type: "node"; node: React.ReactNode }).node} />
        ))}
    </div>
  );

  const experienceContentMobile = (
    <div className="flex flex-col gap-4 w-full">
      {EXPERIENCE_ITEMS
        .filter(item => item.type === "node" && !isSpacer((item as { type: "node"; node: React.ReactNode }).node))
        .map((item, i) => (
          <MobileOfferItem key={i} node={(item as { type: "node"; node: React.ReactNode }).node} />
        ))}
    </div>
  );

  const skillsContentMobile = (
    <div className="flex flex-col gap-4 w-full">
      {BENTO_ITEMS
        .filter(item => item.type === "node" && !isSpacer((item as { type: "node"; node: React.ReactNode }).node))
        .map((item, i) => (
          <MobileOfferItem key={i} node={(item as { type: "node"; node: React.ReactNode }).node} />
        ))}
    </div>
  );

  return (
    <div
      ref={scrollRef}
      className="portfolio-root scrollbar-hide overflow-y-scroll h-screen relative bg-black pointer-events-auto"
    >
      <Header navMode={navMode} onNavClick={handleNavClick} />
      <Filters />

      {/* Fixed backgrounds */}
      <LandingBg innerRef={landingRef} onWorkClick={() => handleNavClick("contact")} />
      <ContactBg innerRef={contactRef} />

      {/* Scrollable content */}
      <div className="relative z-[2] pointer-events-none">
        <div className="h-screen" />

        <AboutSection ref={aboutRef} />

        {/* Horizontal section: desktop only */}
        {!isSmall && (
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
            offerContent={offerContentDesktop}
            experienceContent={experienceContentDesktop}
            skillsContent={skillsContentDesktop}
          />
        )}

        {/* Vertical section: mobile + tablet */}
        {isSmall && (
          <div ref={combinedRef as React.RefObject<HTMLDivElement>}>
            <MobileBackgroundSection
              offerContent={offerContentMobile}
              experienceContent={experienceContentMobile}
              skillsContent={skillsContentMobile}
            />
          </div>
        )}

        <ProjectsSection
          ref={projectsRef}
          onTileMount={collectTile}
          onPickMount={collectPick}
          onTileClick={openModal}
          wordsRef={projectsWordRef}
        />

        <InspireSection ref={inspireRef} />

        <div ref={contactSpacerRef} className="h-screen pointer-events-none" />
      </div>

      <ProjectModal project={activeProject} onClose={closeModal} />
    </div>
  );
}

export default App;