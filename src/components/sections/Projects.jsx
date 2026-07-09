import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Music2 } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

const projects = [
  {
    id: 0,
    title: "Loop — Beyond Limits",
    description:
      "A next-generation, hyper-personalized music streaming ecosystem powered by an adaptive AI intelligence engine. It dynamically analyzes listening patterns to predict and curate your exact mood in real-time. Features an insane 60FPS fluid UI, ultra-low latency playback, instantaneous cross-device cloud sync, and 5 breathtaking visual themes. Built completely from the ground up for the ultimate auditory experience.",
    tags: ["React 19", "TanStack Start", "Supabase", "TypeScript", "Vercel", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    liveUrl: "https://loop-feel.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/Loop-Feel-the-waves",
    accent: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.15)",
    glowBorder: "purple-500/40",
    badge: "🎵 Masterpiece",
  },
  {
    id: 1,
    title: "Legacy Lens",
    description:
      "Built for a competitive hackathon, an AI-powered tool that converts natural language into complex database queries, bridging the gap between non-technical users and databases.",
    tags: ["React", "Node.js", "Gemini AI", "MongoDB", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "https://legacy-lens-beta.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/LegacyLens-2.O",
    accent: "from-blue-400 to-cyan-400",
    glowColor: "rgba(34,211,238,0.15)",
    glowBorder: "cyan-400/40",
  },
  {
    id: 2,
    title: "Quizzify AI",
    description:
      "An AI-driven quiz generator built with a resilient C++ backend for complex scheduling and dynamic scaling. Full stack implementation with Next.js frontend.",
    tags: ["Next.js", "C++", "Tailwind", "Gemini API"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "https://quizzify-ai.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/Quizzify",
    accent: "from-emerald-400 to-teal-400",
    glowColor: "rgba(52,211,153,0.15)",
    glowBorder: "emerald-400/40",
  },
  {
    id: 3,
    title: "Credit Card Validator",
    description:
      "A robust credit card validation engine utilizing the Luhn algorithm for fast, secure, and offline checking. Highly optimized C++ logic.",
    tags: ["C++", "Algorithms", "Terminal"],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "https://github.com/sautrikroy17",
    githubUrl: "https://github.com/sautrikroy17",
    accent: "from-orange-400 to-amber-400",
    glowColor: "rgba(251,146,60,0.15)",
    glowBorder: "orange-400/40",
  },
  {
    id: 4,
    title: "Future Venture: Fintech Engine",
    description:
      "An upcoming project researching quantitative development, algorithmic logic, and high-frequency data structures for DeFi and banking tech.",
    tags: ["Fintech", "Go / Rust", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-blue-400 to-cyan-400",
    glowColor: "rgba(34,211,238,0.15)",
    glowBorder: "cyan-400/40",
  },
];

function FeaturedProjectCard({ project }) {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.2 1"] });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        scale: isMobile ? 1 : scaleProgress, 
        opacity: isMobile ? 1 : opacityProgress, 
        boxShadow: `0 0 0 0 ${project.glowColor}` 
      }}
      initial={isMobile ? { opacity: 0, y: 30 } : false}
      whileInView={isMobile ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl md:rounded-[2.5rem] glass-card border border-white/5 transition-colors duration-700"
      whileHover={!isMobile ? { boxShadow: `0 0 80px ${project.glowColor}` } : {}}
    >
      {/* Background image with strong gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 md:p-14 flex flex-col justify-end min-h-[420px] md:min-h-[480px]">
        {/* Badge */}
        {project.badge && (
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 mb-4 md:mb-6 w-fit text-[10px] md:text-xs font-bold rounded-full bg-gradient-to-r ${project.accent} text-black tracking-widest uppercase shadow-lg`}>
            {project.badge}
          </span>
        )}

        <div className="flex items-center gap-3 mb-4">
          <div className={`hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} items-center justify-center shadow-lg`}>
            <Music2 className="w-5 h-5 text-black" />
          </div>
          <h3 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${project.accent} tracking-tight`}>
            {project.title}
          </h3>
        </div>

        <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md bg-white/5 text-white border-white/10`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-black bg-gradient-to-r ${project.accent} hover:opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95`}
          >
            <ExternalLink className="w-4 h-4" />
            Live App
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors py-3 sm:py-0"
          >
            <GithubIcon className="w-5 h-5" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.3 1"] });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: isMobile ? 1 : scaleProgress, opacity: isMobile ? 1 : opacityProgress }}
      initial={isMobile ? { opacity: 0, y: 30 } : false}
      whileInView={isMobile ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={!isMobile ? { y: -10, boxShadow: `0 0 50px ${project.glowColor}` } : {}}
      className={`group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] glass-card flex flex-col transition-colors duration-500 border border-white/5 hover:border-${project.glowBorder} h-auto md:h-[500px]`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-60 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent z-10" />
        <motion.img
          style={{ y: isMobile ? 0 : yImage }}
          src={project.image}
          alt={project.title}
          className="w-full h-full md:h-[120%] object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between z-20 relative">
        <div>
          <h3 className={`text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${project.accent} mb-3 transition-colors duration-300`}>
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-medium line-clamp-4 md:line-clamp-none">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] md:text-xs font-semibold text-zinc-300 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs md:text-sm font-bold text-white hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5 md:mr-2" />
            {project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs md:text-sm font-bold text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl px-4 md:px-6 mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            A curated collection of scalable systems and fluid interfaces showcasing my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Loop as featured hero card spanning full width */}
          <FeaturedProjectCard project={featured} />

          {/* Rest of projects as regular cards */}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
