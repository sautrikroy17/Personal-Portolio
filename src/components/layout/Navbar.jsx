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
          {/* Left: SR. Brand Identity */}
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 z-[70] outline-none select-none"
            aria-label="Sautrik Roy Homepage"
          >
            <SRLogo />
          </a>

          {/* Center: Portfolio Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
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

          {/* Right: Search Pill + Socials + Resume */}
          <div className="flex items-center space-x-3 sm:space-x-4">
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

            {/* Mobile Search Button */}
            <button
              onClick={handleOpenSearch}
              className="md:hidden p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white active:scale-95"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-zinc-300" />
            </button>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-3 text-zinc-300">
              <a
                href="https://github.com/sautrikroy17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all p-1"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sautrik-roy-1779r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all p-1"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sautrikroy2006@gmail.com"
                aria-label="Email Sautrik Roy"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all p-1"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/95 transition-all duration-300 bg-slate-900/80 hover:bg-blue-950/60 border border-indigo-400/30 hover:border-blue-400 shadow-[0_0_12px_rgba(99,102,241,0.15)] hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]"
            >
              <span>Resume</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
            className="fixed inset-0 z-[55] bg-zinc-950/95 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-6 p-6 w-full max-w-sm">
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
