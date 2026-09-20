import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X, Search, Mail, ArrowRight } from "lucide-react";
import SRLogo from "../ui/SRLogo";
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
            FLOATING CAPSULE ISLAND (Loop Style Container Geometry)
            - Rounded pill capsule (rounded-full)
            - Deep dark frosted glass backdrop with subtle ambient glow
            - Centered and detached from edges (zero horizontal border line)
            - Sautrik's Portfolio Content only (SR. logo, portfolio nav, search, socials, resume)
            ========================================================================= */}
        <div
          className={cn(
            "w-full max-w-6xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300",
            "bg-zinc-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.85)]",
            isScrolled && "border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)] bg-zinc-950/90"
          )}
        >
          {/* Left: SR. Brand Identity + Sautrik Roy */}
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 z-[70] outline-none select-none group shrink-0"
            aria-label="Sautrik Roy Homepage"
          >
            <SRLogo />
            <span className="hidden min-[480px]:inline-block text-sm sm:text-[15px] font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              Sautrik Roy
            </span>
          </a>

          {/* Center: Portfolio Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors duration-200 tracking-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Search Pill + Profile Avatar + Socials + Resume */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            {/* Search Input Pill (Command Palette) */}
            <button
              onClick={handleOpenSearch}
              className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-cyan-500/40 text-zinc-400 hover:text-zinc-200 transition-all text-xs group cursor-pointer shadow-inner"
              title="Search portfolio (⌘K)"
              aria-label="Open Command Search Palette"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-normal text-zinc-400 group-hover:text-zinc-300">
                Search...
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                ⌘K
              </kbd>
            </button>

            {/* Sautrik's Official Photo Avatar (Desktop Ring) */}
            <a
              href="#about"
              className="relative group hidden sm:flex items-center justify-center select-none"
              title="Sautrik Roy"
              aria-label="About Sautrik Roy"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_14px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:scale-105 transition-all duration-200 ring-2 ring-cyan-500/20">
                <img
                  src="/sautrik-avatar.jpg"
                  alt="Sautrik Roy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/sautrik-photo.jpg";
                  }}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-[0_0_6px_#10b981]" />
            </a>

            {/* Mobile Avatar & Search */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#about"
                className="w-7 h-7 rounded-full overflow-hidden border border-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                aria-label="About Sautrik Roy"
              >
                <img
                  src="/sautrik-avatar.jpg"
                  alt="Sautrik Roy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/sautrik-photo.jpg";
                  }}
                />
              </a>
              <button
                onClick={handleOpenSearch}
                className="p-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white active:scale-95"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-zinc-300" />
              </button>
            </div>

            {/* Desktop Social Icons (Prominent, tactile glass buttons that use up space) */}
            <div className="hidden lg:flex items-center space-x-2 text-zinc-300">
              <a
                href="https://github.com/sautrikroy17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all hover:scale-105 shadow-sm"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sautrik-roy-1779r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all hover:scale-105 shadow-sm"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:sautrikroy2006@gmail.com"
                aria-label="Email Sautrik Roy"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all hover:scale-105 shadow-sm"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Resume Button (Desktop & Tablet only; mobile has prominent button inside drawer) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold text-white/95 transition-all duration-300 bg-slate-900/90 hover:bg-blue-950/70 border border-indigo-400/30 hover:border-blue-400 shadow-[0_0_12px_rgba(99,102,241,0.18)] hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

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
            className="fixed inset-0 z-[55] bg-zinc-950/95 flex flex-col items-center justify-center overflow-y-auto py-8"
          >
            <div className="flex flex-col items-center space-y-5 p-6 w-full max-w-sm">
              {/* Profile Card Header in Mobile Drawer */}
              <div className="flex flex-col items-center mb-1 select-none">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-2.5">
                  <img src="/sautrik-avatar.jpg" alt="Sautrik Roy" className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Sautrik Roy</h3>
                <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Full Stack Developer &amp; Product Builder</p>
              </div>

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

              <div className="flex items-center space-x-6 pt-2 text-zinc-400">
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
                className="mt-2 px-8 py-2.5 text-base font-semibold text-white transition-all bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 flex items-center gap-2"
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
