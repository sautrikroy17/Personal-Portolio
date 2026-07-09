import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import MagneticButton from "../ui/MagneticButton";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Simple, GPU-friendly word-level fade-up — NO per-char blur loops
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Hero-local background orb (CSS, no JS) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 10%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: isMobile ? 0 : yText, opacity: isMobile ? 1 : opacityText }}
        className="relative z-10 w-full max-w-5xl px-6 mx-auto flex flex-col items-center text-center mt-[-4vh]"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center px-4 py-2 mb-8 text-xs sm:text-sm font-bold rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-300 backdrop-blur-md tracking-widest uppercase shadow-[0_0_15px_rgba(30,58,138,0.3)]"
        >
          <span className="w-2 h-2 mr-3 rounded-full bg-blue-500 animate-pulse" />
          Full Stack Developer • Where Code Meets Creativity
        </motion.div>

        {/* Main Headline — simple block-level animation, NO char-split */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.05] pb-2 cursor-default">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="block"
          >
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 font-display text-glow">
              Sautrik Roy
            </span>
            .
          </motion.span>
        </h1>

        {/* Sub-tagline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="max-w-2xl mb-12 flex flex-col items-center space-y-3"
        >
          <p className="text-xl sm:text-2xl text-zinc-300 font-medium tracking-tight">
            I turn ideas into experiences you can feel.
          </p>
          <p className="text-lg sm:text-xl font-display font-medium tracking-[0.2em] text-blue-400/80 uppercase">
            Simple. Fast. Intentional.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          <MagneticButton
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white transition-all bg-white/5 rounded-2xl hover:bg-white/10 backdrop-blur-xl border border-white/5 hover:border-blue-500/30"
          >
            Explore Work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white transition-all bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-blue-950/40 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] active:scale-95"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
        className="absolute bottom-10 sm:bottom-16 w-full flex justify-center items-center space-x-10 text-zinc-600 z-20"
      >
        <a
          href="https://github.com/sautrikroy17"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2"
        >
          <GithubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sautrik-roy-1779r"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2"
        >
          <LinkedinIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:sautrikroy2006@gmail.com"
          className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2"
        >
          <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>
    </section>
  );
}
