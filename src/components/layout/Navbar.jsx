import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X, Search, Settings, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 160 && latest > previous && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-[60] flex justify-center pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none"
      >
        {/* =========================================================================
            FLOATING CAPSULE ISLAND (Inspired by Loop music navbar reference)
            - Rounded pill geometry (rounded-full / rounded-2xl)
            - Deep dark frosted glass backdrop with subtle cyan/blue ambient glow
            - Left: Iridescent wave logo + "SR."
            - Center: Nav links with "🌊 Featured: Loop" active pill
            - Right: "Search anything... ⌘K", circular avatar, settings gear
            ========================================================================= */}
        <div
          className={cn(
            "w-full max-w-6xl rounded-2xl md:rounded-full px-3.5 sm:px-5 py-2 flex items-center justify-between pointer-events-auto transition-all duration-300",
            "bg-zinc-950/85 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.85)]",
            isScrolled && "border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)] bg-zinc-950/90"
          )}
        >
          {/* 1. LEFT BRAND: Iridescent Wave + Logo */}
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 z-[70] group outline-none select-none"
            aria-label="Sautrik Roy Homepage"
          >
            {/* Iridescent Gradient Wave Graphic */}
            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 32 12"
                className="w-6 sm:w-7 h-3 sm:h-3.5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="navWaveGrad" x1="0" y1="6" x2="32" y2="6" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="35%" stopColor="#ec4899" />
                    <stop offset="70%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M1 6C4.5 1.5 8 1.5 11.5 6C15 10.5 18.5 10.5 22 6C24.5 3 27 3 31 6"
                  stroke="url(#navWaveGrad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Brand Title */}
            <span className="font-extrabold text-base sm:text-lg text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              SR<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* 2. CENTER NAVIGATION: Links + Featured Pill */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-7">
            <a
              href="#about"
              className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>

            {/* Featured Pill: Inspired by the "🌊 Bollywood Main Character" pill */}
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/50 hover:bg-sky-900/60 border border-sky-400/40 text-sky-300 text-xs font-medium shadow-[0_0_12px_rgba(56,189,248,0.2)] hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="text-xs">🌊</span>
              <span className="font-medium tracking-tight">Featured: Loop</span>
            </a>

            <a
              href="#skills"
              className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* 3. RIGHT SECTION: Search Pill + Avatar + Settings/Resume */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Search Input Pill (Opens Command Palette) */}
            <button
              onClick={handleOpenSearch}
              className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-cyan-500/40 text-zinc-400 hover:text-zinc-200 transition-all text-xs group cursor-pointer shadow-inner"
              title="Search anything... (⌘K)"
              aria-label="Open Command Search Palette"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-normal text-zinc-400 group-hover:text-zinc-300">
                Search anything...
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={handleOpenSearch}
              className="md:hidden p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white active:scale-95"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-zinc-300" />
            </button>

            {/* Circular Profile Avatar Photo (from reference image) */}
            <a
              href="#about"
              className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.35)] hover:scale-105 active:scale-95 transition-transform shrink-0"
              title="About Sautrik Roy"
              aria-label="About Sautrik Roy"
            >
              <img
                src="/sautrik-avatar.png"
                alt="Sautrik Roy"
                className="w-full h-full object-cover"
              />
            </a>

            {/* Settings Gear / Actions Button (matching reference image) */}
            <button
              onClick={handleOpenSearch}
              className="w-8 h-8 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-sm group active:scale-95"
              title="Quick Actions & Commands"
              aria-label="Settings and Commands"
            >
              <Settings className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-300 hover:text-white z-[70] transition-transform active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =========================================================================
          MOBILE MENU OVERLAY
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-zinc-950/95 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-6 p-6 w-full max-w-sm">
              {/* Featured Pill for mobile */}
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/40 text-sky-300 text-sm font-medium shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              >
                <span>🌊</span>
                <span>Featured: Loop</span>
              </a>

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05 }}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex items-center space-x-6 pt-4 text-zinc-400">
                <a
                  href="https://github.com/sautrikroy17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white p-2"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sautrik-roy-1779r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white p-2"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="mailto:sautrikroy2006@gmail.com"
                  className="hover:text-white p-2"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-2.5 text-base font-semibold text-white transition-all bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 flex items-center gap-2"
              >
                <span>Resume</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
