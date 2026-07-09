import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

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
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 100 && latest > previous && !mobileMenuOpen) {
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
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-[60] flex items-center justify-center p-4 transition-all duration-300",
          isScrolled ? "pt-4" : "pt-8"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between w-full max-w-5xl px-6 py-3 mx-auto transition-all duration-300",
            isScrolled
              ? "bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg"
              : "bg-transparent border-transparent"
          )}
        >
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors z-[70]"
          >
            <img src="/logo.png" alt="Sautrik Logo" className="w-8 h-8 rounded-lg" />
            <span>Sautrik<span className="text-blue-500">.</span></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-zinc-900 border border-zinc-800 rounded-full hover:bg-blue-950/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]"
          >
            Contact Me
          </a>

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
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-zinc-950/80 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 p-6 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-3 text-lg font-bold text-white transition-all bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
