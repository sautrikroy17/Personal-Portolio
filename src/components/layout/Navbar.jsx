import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
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
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          Sautrik<span className="text-blue-500">.</span>
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

        {/* Mobile menu button could go here, omitting for deep simplicity unless requested */}
        <button className="md:hidden p-2 text-zinc-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* simple hamburger icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
