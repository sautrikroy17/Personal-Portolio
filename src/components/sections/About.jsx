import { motion } from "framer-motion";
import { Box, BookOpen, PenLine, ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

const bentoFeatures = [
  {
    number: "01",
    title: "BUILD",
    quote: "Ideas are cheap. Shipping isn’t.",
    tag: "TURN IDEAS INTO REAL SOLUTIONS",
    icon: Box,
    href: "#projects",
  },
  {
    number: "02",
    title: "LEARN",
    quote: "Every project should teach me something.",
    tag: "STAY CURIOUS. STAY GROWING",
    icon: BookOpen,
    href: "#skills",
  },
  {
    number: "03",
    title: "REFINE",
    quote: "The last 10% matters.",
    tag: "DETAILS CREATE IMPACT",
    icon: PenLine,
    href: "#experience",
  },
];

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

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-8 select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Developer at desk with dual monitors, code, ambient lamp, books, poster & city
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/about-workspace.webp"
          alt="Developer focused on coding at desk"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-100"
        />

        {/* Soft bottom edge blend into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          MAIN ABOUT CONTENT
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl flex flex-col items-start text-left space-y-5"
        >
          {/* Section Tracker Label: 01 / ABOUT */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-500">01</span>
              <span className="text-xs font-mono font-medium tracking-widest text-zinc-500">/</span>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">ABOUT</span>
              <div className="w-8 h-[1px] bg-zinc-700/80 ml-1" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-[-0.035em] text-white leading-[1.04]">
              Curious by nature.<br />
              Relentless in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.65)] font-display">
                build.
              </span>
            </h2>
          </motion.div>

          {/* Bio Description */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base text-zinc-300/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              I’m Sautrik — a developer who enjoys turning ambitious ideas into products people can actually use.
              I work across full-stack development, AI integration and product engineering, with a focus on
              building experiences that are fast, intuitive and thoughtfully designed.
            </p>
          </motion.div>

          {/* Motto / Tagline Sub-accent */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
            <span className="font-handwriting text-zinc-300/80 text-xl font-bold italic tracking-wide">
              Better Products. A Brighter Tomorrow.
            </span>
            <div className="w-12 h-[2px] bg-blue-500 shadow-[0_0_8px_#3b82f6] rounded-full" />
          </motion.div>
        </motion.div>

        {/* =========================================================================
            BENTO CARDS ROW (01 BUILD, 02 LEARN, 03 REFINE, CURRENTLY)
            ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 pt-8"
        >
          {/* The 3 Core Principle Bento Cards (Col span 7 total: ~2.3 cols each) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {bentoFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.a
                  key={feat.number}
                  href={feat.href}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-900/85 backdrop-blur-2xl border border-white/10 hover:border-blue-500/50 shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Top Row: Number, Icon, Arrow */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-medium text-zinc-400">
                        {feat.number}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                    </div>

                    {/* Title & Quote */}
                    <h3 className="text-base font-extrabold text-white tracking-tight mb-1.5 group-hover:text-blue-200 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-zinc-300/85 leading-snug font-normal">
                      {feat.quote}
                    </p>
                  </div>

                  {/* Bottom uppercase tag */}
                  <div className="pt-4 mt-2 border-t border-white/5">
                    <span className="text-[9.5px] font-mono font-semibold tracking-wider text-zinc-400 uppercase group-hover:text-zinc-300 transition-colors">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 inset-x-4 h-[2px] bg-transparent group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_#60a5fa] transition-all duration-300 rounded-full" />
                </motion.a>
              );
            })}
          </div>

          {/* The Large Bento Card: CURRENTLY (Col span 5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative p-5 rounded-2xl bg-slate-950/75 backdrop-blur-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
          >
            {/* Top Header: CURRENTLY + Location */}
            <div className="relative z-10 flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-300 uppercase">
                  CURRENTLY
                </span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-medium text-zinc-300">
                <MapPin className="w-3 h-3 text-blue-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="relative z-10 mb-4">
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                Full-stack products + AI experiences.
              </h3>
              <p className="text-xs font-medium text-zinc-400">
                SRMIST &bull; Chennai
              </p>
            </div>

            {/* Activities List */}
            <div className="relative z-10 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-200 min-w-[65px]">Learning</span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-zinc-300">System Design &bull; DSA &bull; AI Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-200 min-w-[65px]">Building</span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-zinc-300">Web Apps &bull; AI Tools &bull; Product Experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-200 min-w-[65px]">Exploring</span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-zinc-300">Better systems, better interfaces</span>
              </div>
            </div>

            {/* Decorative 3D Wireframe Digital Globe (Bottom Right Graphic) */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-500">
              <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400 animate-[spin_40s_linear_infinite]">
                <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="85" ry="35" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <ellipse cx="100" cy="100" rx="35" ry="85" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================================
          BOTTOM META BAR (Scroll to Explore & 02 / 06 Pagination)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 flex items-center justify-between text-zinc-400">
        {/* Scroll Indicator (Left) */}
        <a
          href="#projects"
          className="group flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
        >
          <div className="w-4 h-6 rounded-full border border-zinc-400/60 group-hover:border-blue-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-zinc-400 group-hover:bg-blue-400"
            />
          </div>
          <span>SCROLL TO EXPLORE</span>
          <div className="w-8 h-[1px] bg-zinc-400/40 group-hover:w-12 group-hover:bg-blue-400 transition-all duration-300" />
        </a>

        {/* Section Pagination & Slider Indicator (Right: 02 / 06) */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white">02</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-500">06</span>
          </div>

          {/* Progress Line */}
          <div className="w-12 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
            <div className="w-2/6 h-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1 text-zinc-400">
            <a href="#top" className="p-1 hover:text-white transition-colors" aria-label="Previous section">
              <ChevronLeft className="w-4 h-4" />
            </a>
            <a href="#projects" className="p-1 hover:text-white transition-colors" aria-label="Next section">
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
