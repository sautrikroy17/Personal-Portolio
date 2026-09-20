import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

const featuredProject = {
  number: "01",
  tag: "FEATURED PROJECT",
  title: "Loop — Beyond Limits",
  subtitle: "A next-generation music experience, built for a more personal you.",
  description:
    "A modern, AI-powered music platform with personalized recommendations, live lyrics, immersive player experience and more.",
  tags: ["React", "TypeScript", "Supabase", "PWA", "Framer Motion"],
  liveUrl: "https://loop-feel.vercel.app",
  githubUrl: "https://github.com/sautrikroy17/Loop-Beyond-Limits",
  image: "/loop.png",
};

const secondaryProjects = [
  {
    number: "02",
    title: "Quizify",
    subtitle: "AI-powered quiz generation from your documents.",
    tags: ["Next.js", "C++", "Tailwind CSS", "Gemini AI"],
    image: "/quizzify.png",
    liveUrl: "https://quizzify-ai.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/Quizzify",
    glowColor: "rgba(56, 189, 248, 0.2)",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    number: "03",
    title: "Sentinel",
    subtitle: "Mental wellness platform for uniformed forces.",
    tags: ["React 18", "Node.js", "Supabase", "WebRTC", "Capacitor", "PWA"],
    image: "/sentinel.png",
    liveUrl: "https://sentinelsfrontend.onrender.com/",
    githubUrl: null,
    glowColor: "rgba(16, 185, 129, 0.2)",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    number: "04",
    title: "Legacy Lens 2.0",
    subtitle: "A lightweight, high-performance database system.",
    tags: ["React", "Node.js", "Gemini AI", "PostgreSQL", "MongoDB"],
    image: "/legacy-lens.png",
    liveUrl: "https://legacy-lens-beta.vercel.app/",
    githubUrl: "https://github.com/sautrikroy17/LegacyLens-2.O",
    glowColor: "rgba(99, 102, 241, 0.2)",
    accentColor: "from-blue-500 to-indigo-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden bg-black text-white">
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Tuned with object-top and smooth top/bottom blends for continuous flow
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <picture>
          <source srcSet="/projects-workspace.webp" type="image/webp" />
          <img
            src="/projects-workspace.jpg"
            alt="Projects Workspace Studio"
            className="w-full h-full object-cover object-[center_top] opacity-80"
            loading="lazy"
          />
        </picture>

        {/* Mobile atmospheric contrast overlay: ensures crisp text readability while preserving the desk & monitor glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90 sm:hidden pointer-events-none z-[1]" />

        {/* Seamless top blend with About section to eliminate harsh boundaries */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Left vignette for maximum typography readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[52%] bg-gradient-to-r from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Bottom fade into Skills section - seamless dark studio transition */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            TOP ROW: Selected Work Headline + Featured Project (Loop)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Heading & Quotes */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2 md:pt-4">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs md:text-sm tracking-widest text-sky-400 font-bold uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                02 / WORK
              </span>
              <div className="w-12 h-[1px] bg-sky-500/40" />
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.05]">
              Selected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                Work.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-6 font-normal">
              A few things I've built, broken, learned from, and shipped.
            </p>

            {/* Handwritten Quote */}
            <div className="relative pt-1">
              <p className="font-['Caveat',cursive] text-2xl md:text-3xl text-zinc-400 leading-snug">
                Better Products.
                <br />
                A Brighter Tomorrow.
              </p>
              <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-2 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            </div>
          </div>

          {/* Right Column: Featured Project Glass Card */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-3xl p-6 sm:p-8 md:p-9 border border-white/10 bg-zinc-950/65 backdrop-blur-xl shadow-2xl hover:border-blue-500/40 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Tag / Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-zinc-400 tracking-wider">
                  {featuredProject.number}
                </span>
                <span className="w-4 h-[1px] bg-zinc-600" />
                <span className="text-[11px] font-bold text-zinc-300 tracking-widest uppercase">
                  {featuredProject.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                {featuredProject.title}
              </h3>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-2.5">
                {featuredProject.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 max-w-xl">
                {featuredProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Loop Project Image Preview (Mobile & Tablet - Desktop is preserved as requested) */}
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block lg:hidden relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner group/img aspect-video mb-6"
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-[11px] font-semibold text-white inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                    <ExternalLink className="w-3 h-3 text-sky-400" />
                    Open Live
                  </span>
                </div>
              </a>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-sky-400/40 bg-sky-500/15 hover:bg-sky-500/25 text-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 group/btn"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 text-sky-400 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-sm font-medium transition-all"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ROW: 3 Secondary Project Cards (With Tech Stacks & Working Links)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-14">
          {secondaryProjects.map((project) => (
            <div
              key={project.number}
              className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group overflow-hidden"
            >
              {/* Card top bar */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      {project.number}
                    </span>
                    <span className="w-5 h-[1px] bg-zinc-700" />
                  </div>

                  <div className="flex items-center gap-2">
                    {/* GitHub Link Icon (Only if repo is public) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Live Demo Arrow Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500 hover:text-black flex items-center justify-center text-sky-400 transition-all shadow-sm"
                      title="Live Demo"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1.5 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3.5 font-normal">
                  {project.subtitle}
                </p>

                {/* Tech Stack Pills (Matching Loop) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-zinc-300 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Project Image Preview Container */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner group/img aspect-video mt-auto"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                    <ExternalLink className="w-3 h-3 text-sky-400" />
                    Open Live
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* =========================================================================
            BOTTOM METADATA BAR (Scroll to Explore, Ideas Compound & Section 03 / 06)
            ========================================================================= */}
        <div className="mt-14 md:mt-18 pt-7 border-t border-white/5 flex items-center justify-between gap-4 text-zinc-400">
          {/* Scroll to explore indicator */}
          <a
            href="#skills"
            className="group flex items-center gap-2.5 sm:gap-3 text-[11px] font-semibold tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
          >
            <div className="w-4 h-6 rounded-full border border-white/25 group-hover:border-sky-400 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-cyan-400 group-hover:bg-sky-400"
              />
            </div>
            <span className="font-mono tracking-widest uppercase text-[10px] text-zinc-400 group-hover:text-zinc-200">
              SCROLL TO EXPLORE
            </span>
            <div className="hidden sm:block w-10 h-[1px] bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
          </a>

          {/* Script Quote */}
          <div className="hidden lg:block text-center">
            <span className="font-['Caveat',cursive] text-2xl text-zinc-400 tracking-wide">
              Ideas compound.
            </span>
          </div>

          {/* Right: Section Tracker 03 / 06 & View All Projects Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Section Pagination matching About */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">03</span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-500">06</span>
              </div>

              {/* Progress Line */}
              <div className="w-10 sm:w-12 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-3/6 h-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1 text-zinc-400">
                <a href="#about" className="p-1 hover:text-white transition-colors" aria-label="Previous section">
                  <ChevronLeft className="w-4 h-4" />
                </a>
                <a href="#skills" className="p-1 hover:text-white transition-colors" aria-label="Next section">
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* View All Projects Button */}
            <a
              href="https://github.com/sautrikroy17?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-medium text-xs transition-all duration-300 group shrink-0"
            >
              <span className="hidden min-[480px]:inline">View All Projects</span>
              <span className="inline min-[480px]:hidden">All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
