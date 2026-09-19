import { motion } from "framer-motion";
import { ArrowRight, Mail, Lightbulb, Code2, Box, BarChart3, MapPin } from "lucide-react";

// The 4 interactive bento tiles
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
          Crystal-clear, sharp, vivid developer desk image.
          Left-edge gradient ensures high text contrast; right side remains 100% luminous and crisp.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-workspace.webp"
          alt="Atmospheric Developer Workspace"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-right lg:object-center opacity-100"
        />

        {/* Subtle left-side dark gradient ONLY under the text/cards column */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[52%] bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent pointer-events-none" />

        {/* Soft bottom edge blend into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT (Left Column)
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/[0.08] backdrop-blur-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.2em] text-zinc-300 uppercase">
                BUILD &bull; LEARN &bull; SOLVE &bull; REPEAT
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.04em] text-white leading-[1.02]">
              Hi, I’m<br />
              Sautrik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 drop-shadow-[0_0_24px_rgba(59,130,246,0.5)]">
                Roy.
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline description */}
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-[17px] text-zinc-300/85 font-normal leading-relaxed max-w-lg">
              I build full-stack and AI-powered products that turn complex problems into elegant,
              impactful experiences.
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_rgba(37,99,235,0.7)] transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full text-sm font-medium text-zinc-200 bg-zinc-950/40 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-200 shadow-sm"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
            </motion.a>
          </motion.div>

          {/* =========================================================================
              THE 4 BENTO GLASS TILES (Ideas, Code, Products, Impact)
              ========================================================================= */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl lg:max-w-2xl pt-2"
          >
            {bentoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.number}
                  href={card.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex flex-col justify-between p-3.5 rounded-xl bg-zinc-950/30 hover:bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/40 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Top Row: Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-zinc-300">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 text-left">
                    <h2 className="text-sm font-semibold text-white mb-0.5 tracking-tight group-hover:text-blue-300 transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-[11px] text-zinc-300/80 leading-snug line-clamp-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Subtle bottom line highlight on hover */}
                  <div className="absolute bottom-0 inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/0 to-transparent group-hover:via-blue-400 transition-all duration-300" />
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
          className="group flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
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
