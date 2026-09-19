import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

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
  tags: ["React", "TypeScript", "Supabase", "Framer Motion"],
  liveUrl: "https://loop-feel.vercel.app",
  githubUrl: "https://github.com/sautrikroy17/Loop-Beyond-Limits",
  image: "/loop.png",
};

const secondaryProjects = [
  {
    number: "02",
    title: "Quizify",
    subtitle: "AI-powered quiz generation from your documents.",
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
    image: "/sentinel.png",
    liveUrl: "https://sentinelsfrontend.onrender.com/",
    githubUrl: "https://github.com/sautrikroy17/Sentinel_SIH",
    glowColor: "rgba(16, 185, 129, 0.2)",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    number: "04",
    title: "Legacy Lens 2.0",
    subtitle: "A lightweight, high-performance database system.",
    image: "/legacy-lens.png",
    liveUrl: "https://legacy-lens-beta.vercel.app/",
    githubUrl: "https://github.com/sautrikroy17/LegacyLens-2.O",
    glowColor: "rgba(99, 102, 241, 0.2)",
    accentColor: "from-blue-500 to-indigo-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20 md:py-28 overflow-hidden bg-black text-white">
      {/* Dynamic Background matching 10/10 mockup */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <picture>
          <source srcSet="/projects-workspace.webp" type="image/webp" />
          <img
            src="/projects-workspace.jpg"
            alt="Workspace Studio"
            className="w-full h-full object-cover object-center opacity-85"
            loading="lazy"
          />
        </picture>
        {/* Shading gradients to blend left side deep dark for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 lg:via-black/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/95 z-10" />
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW: Selected Work Headline + Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Quotes */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-400 font-semibold uppercase">
                02 / WORK
              </span>
              <div className="w-12 h-[1px] bg-zinc-700/60" />
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Selected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                Work.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base md:text-lg max-w-md leading-relaxed mb-8 font-normal">
              A few things I've built, broken, learned from, and shipped.
            </p>

            {/* Handwritten Quote */}
            <div className="relative pt-2">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-2xl hover:border-blue-500/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Tag / Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono font-bold text-zinc-400 tracking-wider">
                  {featuredProject.number}
                </span>
                <span className="w-4 h-[1px] bg-zinc-600" />
                <span className="text-[11px] font-bold text-zinc-300 tracking-widest uppercase">
                  {featuredProject.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                {featuredProject.title}
              </h3>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-3">
                {featuredProject.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-xl">
                {featuredProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-sky-400/40 bg-sky-500/10 hover:bg-sky-500/20 text-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 group/btn"
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
            </motion.div>
          </div>
        </div>

        {/* BOTTOM ROW: 3 Secondary Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group overflow-hidden"
            >
              {/* Card top bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      {project.number}
                    </span>
                    <span className="w-5 h-[1px] bg-zinc-700" />
                  </div>

                  <div className="flex items-center gap-2">
                    {/* GitHub Link Icon */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>

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
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                  {project.subtitle}
                </p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <ExternalLink className="w-3 h-3 text-sky-400" />
                    Open Live
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Scroll to explore indicator */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
            <span className="font-mono tracking-widest uppercase text-[10px] text-zinc-400 font-medium">
              SCROLL TO EXPLORE
            </span>
            <div className="hidden sm:block w-12 h-[1px] bg-zinc-800" />
          </div>

          {/* Script Quote */}
          <div className="text-center">
            <span className="font-['Caveat',cursive] text-xl text-zinc-400 tracking-wide">
              Ideas compound.
            </span>
          </div>

          {/* View All Projects Button */}
          <div>
            <a
              href="https://github.com/sautrikroy17?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-medium text-xs transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
