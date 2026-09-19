import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X, Mail, ArrowRight } from "lucide-react";
import SRLogo from "../ui/SRLogo";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
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

    if (latest > 120 && latest > previous && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
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

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-[60] transition-all duration-300",
          isScrolled
            ? "py-3 bg-zinc-950/75 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50"
            : "py-6 bg-transparent"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 z-[70] outline-none"
            aria-label="Sautrik Roy Homepage"
          >
            <SRLogo />
          </a>

          {/* Navigation Links in Center */}
          <div className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-zinc-300 hover:text-white transition-colors duration-200 tracking-normal hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Group: Social Icons + Resume CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://github.com/sautrikroy17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-200 p-1.5"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sautrik-roy-1779r"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-200 p-1.5"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:sautrikroy2006@gmail.com"
              aria-label="Email Sautrik Roy"
              className="text-zinc-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-200 p-1.5"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Resume Button */}
            <a
              href="#contact"
              onClick={(e) => {
                // If user clicks resume, either smooth scroll or open resume
                // Can open prompt or scroll
              }}
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-white/95 transition-all duration-300 bg-slate-900/60 hover:bg-blue-950/40 border border-indigo-400/30 hover:border-blue-400 shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white z-[70] transition-transform active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-zinc-950/90 flex flex-col items-center justify-center"
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
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
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
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sautrik-roy-1779r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white p-2"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="mailto:sautrikroy2006@gmail.com"
                  className="hover:text-white p-2"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-2.5 text-base font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 flex items-center gap-2"
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
