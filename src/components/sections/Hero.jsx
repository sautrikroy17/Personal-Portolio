import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Lightbulb, Code2, Box, BarChart3, MapPin, Sparkles } from "lucide-react";

// Rotating titles to spice up the hero badge
const ROLES = [
  "Full Stack Developer",
  "AI & Product Engineer",
  "Systems Architect",
  "Creative Technologist",
];

// The 4 interactive bento tiles from the reference mockup
const bentoCards = [
  {
    number: "01",
    title: "Ideas",
    description: "Turning ideas into real solutions.",
    icon: Lightbulb,
    href: "#about",
  },
  {
    number: "02",
    title: "Code",
    description: "Writing clean, scalable code.",
    icon: Code2,
    href: "#skills",
  },
  {
    number: "03",
    title: "Products",
    description: "Building products that create value.",
    icon: Box,
    href: "#projects",
  },
  {
    number: "04",
    title: "Impact",
    description: "Solving real problems, for real people.",
    icon: BarChart3,
    href: "#experience",
  },
];

// Motion animation variants for smooth sequential reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-28 pb-6 sm:pb-8 select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Smoothly blended dark background on the left for maximum hero card contrast;
          100% luminous, crystal-clear workspace scene on the right
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-workspace.webp"
          alt="Atmospheric Developer Workspace"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-100"
        />

        {/* Mobile atmospheric contrast overlay: ensures crisp text readability while preserving the desk & monitor glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90 sm:hidden pointer-events-none z-[1]" />

        {/* Seamless bottom edge blend into About section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-10" />
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT (Left Column)
          Positioned directly over the deep dark velvety left half for 10/10 contrast
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left space-y-4 sm:space-y-6"
        >
          {/* Spiced-Up Interactive Status & Dynamic Role Badge */}
          <motion.div variants={itemVariants} className="pt-0.5">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-950/85 border border-cyan-500/35 hover:border-cyan-400/60 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.22)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 group cursor-default">
              {/* Pulsing Live Radar Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>

              {/* Glowing Sparkle Icon */}
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse flex-shrink-0" />

              {/* Dynamic Rotating Role Title */}
              <div className="h-5 overflow-hidden flex items-center min-w-[150px] sm:min-w-[185px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 12, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -12, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[11px] sm:text-[13px] font-display font-bold tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 uppercase select-none whitespace-nowrap"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Availability Status Badge */}
              <span className="hidden min-[480px]:inline-flex items-center text-[9.5px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                OPEN TO WORK
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold tracking-[-0.035em] text-white leading-[1.08]">
              Hi, I’m<br />
              Sautrik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.7)] font-display">
                Roy.
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline description */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              I build full-stack and AI-powered products that turn complex problems into elegant,
              impactful experiences.
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-row items-center gap-2.5 sm:gap-3.5 pt-1 w-full sm:w-auto">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(37,99,235,0.9)] transition-all text-xs sm:text-base text-center"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-zinc-200 bg-slate-950/70 hover:bg-slate-900/90 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-lg transition-all text-xs sm:text-base text-center"
            >
              <span>Get in Touch</span>
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

          {/* =========================================================================
              THE 4 BENTO GLASS TILES (Ideas, Code, Products, Impact)
              ========================================================================= */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xl lg:max-w-2xl pt-2"
          >
            {bentoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.number}
                  href={card.href}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex flex-col justify-between p-2.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md border bg-slate-950/70 border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transform-gpu"
                >
                  {/* Top Row: Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-200">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-zinc-400 tracking-wider">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 text-left">
                    <h2 className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1 tracking-tight group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs text-zinc-300 leading-tight sm:leading-snug line-clamp-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom accent line - only glows on hover */}
                  <div className="absolute bottom-0 inset-x-4 h-[2px] transition-all duration-300 rounded-full bg-transparent group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_#60a5fa]" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================================
          BOTTOM META BAR (Scroll to Explore & Location)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-4 sm:pt-8 flex items-center justify-between text-zinc-300"
      >
        {/* Scroll Indicator (Left) */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
        >
          {/* Animated Mouse Icon */}
          <div className="w-4 h-6 rounded-full border border-zinc-300/60 group-hover:border-blue-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-zinc-400 group-hover:bg-blue-400"
            />
          </div>
          <span>SCROLL TO EXPLORE</span>
          <div className="w-8 h-[1px] bg-zinc-300/40 group-hover:w-12 group-hover:bg-blue-400 transition-all duration-300" />
        </a>

        {/* Location Indicator (Right) */}
        <div className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-300/90">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Chennai, India</span>
        </div>
      </motion.div>
    </section>
  );
}
