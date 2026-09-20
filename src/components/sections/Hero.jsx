import { motion } from "framer-motion";
import { ArrowRight, Mail, Lightbulb, Code2, Box, BarChart3, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

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
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-8 select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Smoothly blended dark background on the left for maximum hero card contrast;
          100% luminous, crystal-clear workspace scene on the right with:
          - Wall poster: 'Talent without working hard is nothing. — Cristiano Ronaldo'
          - Mug: "It's you vs you. no excuses."
          - Laptop: Code + 'Build Solve Improve Repeat.'
          - Books, plant, astronaut, AirPods, mouse, twilight city skyline, window cursive.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-workspace.webp"
          alt="Atmospheric Developer Workspace"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-100"
        />

        {/* Seamless bottom edge blend into About section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-10" />
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT (Left Column)
          Positioned directly over the deep dark velvety left half for 10/10 contrast
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left space-y-6"
        >
          {/* Tag Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/85 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_16px_rgba(59,130,246,0.18)]">
              <span className="text-xs sm:text-[13px] font-display font-bold tracking-[0.14em] text-white uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                FULL STACK DEVELOPER
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold tracking-[-0.035em] text-white leading-[1.05]">
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(37,99,235,0.9)] transition-all duration-300 text-center"
            >
              <span className="text-sm sm:text-base font-semibold">View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-semibold text-zinc-200 bg-slate-950/70 hover:bg-slate-900/90 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-lg transition-all duration-300 text-center"
            >
              <span className="text-sm sm:text-base font-semibold">Get in Touch</span>
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

          {/* =========================================================================
              THE 4 BENTO GLASS TILES (Ideas, Code, Products, Impact)
              High-contrast, razor-sharp glass cards matching reference image
              ========================================================================= */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-xl lg:max-w-2xl pt-2"
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
                  className="group relative flex flex-col justify-between p-3 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md border bg-slate-950/70 border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transform-gpu"
                >
                  {/* Top Row: Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-zinc-400 tracking-wider">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 text-left">
                    <h2 className="text-sm sm:text-base font-bold text-white mb-1 tracking-tight group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-zinc-300 leading-snug line-clamp-2">
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
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 flex items-center justify-between text-zinc-300"
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
