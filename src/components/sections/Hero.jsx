import { motion } from "framer-motion";
import { ArrowRight, Mail, Lightbulb, Code2, Box, BarChart3, MapPin } from "lucide-react";

// The 4 interactive bento tiles from the reference mockup
const bentoCards = [
  {
    number: "01",
    title: "Ideas",
    description: "Turning ideas into real solutions.",
    icon: Lightbulb,
    href: "#about",
    glowColor: "from-blue-500/20 to-cyan-500/10",
  },
  {
    number: "02",
    title: "Code",
    description: "Writing clean, scalable code.",
    icon: Code2,
    href: "#skills",
    glowColor: "from-indigo-500/20 to-blue-500/10",
  },
  {
    number: "03",
    title: "Products",
    description: "Building products that create value.",
    icon: Box,
    href: "#projects",
    glowColor: "from-cyan-500/20 to-indigo-500/10",
  },
  {
    number: "04",
    title: "Impact",
    description: "Solving real problems, for real people.",
    icon: BarChart3,
    href: "#experience",
    glowColor: "from-blue-500/20 to-purple-500/10",
  },
];

// Motion animation variants for smooth sequential reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          High-performance LCP image with fetchpriority="high" and dark gradient masks
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Crisp WebP Background Photograph */}
        <img
          src="/hero-workspace.webp"
          alt="Atmospheric Developer Workspace"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-right lg:object-center opacity-85 transition-opacity duration-1000"
        />

        {/* Cinematic gradient overlays for contrast and smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent sm:via-zinc-950/60 sm:to-zinc-950/20 lg:from-zinc-950/95 lg:via-zinc-950/50 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-zinc-950/80 to-transparent" />

        {/* Ambient subtle blue backlight glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
      </div>

      {/* =========================================================================
          BACKGROUND ATMOSPHERIC QUOTES (From Reference Mockup)
          ========================================================================= */}
      {/* Top-Right Window Handwritten Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="hidden lg:block absolute top-28 right-16 z-10 text-right pointer-events-none select-none"
      >
        <p className="font-handwriting text-zinc-300/85 text-2xl font-bold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] -rotate-3">
          Same<br />
          Student<br />
          Bigger<br />
          Vision.
        </p>
      </motion.div>

      {/* Center/Right Ambient Framed Wall Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden xl:block absolute top-24 left-[58%] z-10 pointer-events-none select-none"
      >
        <div className="border border-white/5 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl">
          <p className="text-zinc-300 font-bold text-sm tracking-tight leading-snug">
            Discipline<br />
            Builds<br />
            Freedom.
          </p>
          <div className="w-6 h-[2px] bg-blue-500/80 mt-1.5 rounded-full" />
        </div>
      </motion.div>

      {/* =========================================================================
          MAIN HERO CONTENT (Left Column)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col items-start text-left"
        >
          {/* Tag Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-zinc-300 uppercase">
                BUILD &bull; LEARN &bull; SOLVE &bull; REPEAT
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[82px] font-black tracking-[-0.035em] text-white leading-[1.02]">
              Hi, I’m<br />
              Sautrik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.65)] font-display">
                Roy.
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline description */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-xl font-normal">
              I build full-stack and AI-powered products that turn complex problems into elegant,
              impactful experiences.
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12 sm:mb-14">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(37,99,235,0.55)] hover:shadow-[0_0_35px_rgba(37,99,235,0.85)] transition-shadow duration-300"
            >
              <span className="text-sm sm:text-base font-semibold">View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-zinc-200 bg-slate-950/60 hover:bg-slate-900/80 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-lg transition-all duration-300"
            >
              <span className="text-sm sm:text-base font-semibold">Get in Touch</span>
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

          {/* =========================================================================
              THE 4 BENTO GLASS TILES (Ideas, Code, Products, Impact)
              ========================================================================= */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 max-w-xl lg:max-w-2xl"
          >
            {bentoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.number}
                  href={card.href}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl glass-tile hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Subtle hover gradient illumination */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Row: Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-zinc-300 tracking-wider">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 text-left">
                    <h2 className="text-sm sm:text-base font-bold text-white mb-1 tracking-tight group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-zinc-300/80 leading-snug line-clamp-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom neon accent line on hover */}
                  <div className="absolute bottom-0 inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover:via-blue-400 group-hover:shadow-[0_0_8px_#60a5fa] transition-all duration-300" />
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 flex items-center justify-between text-zinc-300"
      >
        {/* Scroll Indicator (Left) */}
        <a
          href="#about"
          className="group flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
        >
          {/* Animated Mouse Icon */}
          <div className="w-4 h-7 rounded-full border border-zinc-300/60 group-hover:border-blue-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-zinc-400 group-hover:bg-blue-400"
            />
          </div>
          <span>SCROLL TO EXPLORE</span>
          <div className="w-10 h-[1px] bg-zinc-300/40 group-hover:w-14 group-hover:bg-blue-400 transition-all duration-300" />
        </a>

        {/* Location Indicator (Right) */}
        <div className="flex items-center gap-2 text-[12px] sm:text-xs font-medium text-zinc-300/90">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Chennai, India</span>
        </div>
      </motion.div>
    </section>
  );
}
