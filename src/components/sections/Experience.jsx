import { motion } from "framer-motion";
import {
  Lightbulb,
  TrendingUp,
  BookOpen,
  Target,
  ArrowRight,
  ArrowUpRight,
  Music,
  Sparkles,
  Shield,
  FileText,
  Mail,
  Folder,
  FileCode,
  CheckCircle2,
  Terminal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../lib/utils";

const timelineItems = [
  {
    year: "2022",
    tag: "THE BEGINNING",
    title: "Exploring the Web",
    description:
      "Started my development journey, learned the basics of web technologies and built my first interfaces. This is where curiosity turned into a passion.",
    tech: ["HTML", "CSS", "JavaScript"],
    caption: "First steps. Real excitement.",
    type: "website",
  },
  {
    year: "2023",
    tag: "GOING DEEPER",
    title: "Backend & Problem Solving",
    description:
      "Explored backend development, learned C++ and data structures, and started understanding how systems work under the hood.",
    tech: ["C++", "Node.js", "Express", "DSA"],
    caption: "Building logic. Understanding systems.",
    type: "code",
  },
  {
    year: "NOW",
    tag: "BUILDING",
    title: "Full-stack + AI",
    description:
      "Currently building full-stack and AI-powered products like Loop, Quizzify and Sentinel, contributing to open source and constantly learning, iterating and shipping better.",
    tech: ["Next.js", "React", "MongoDB", "AI Integrations", "AWS"],
    caption: "Turning ideas into real products.",
    type: "loop",
  },
];

const philosophies = [
  {
    icon: Lightbulb,
    title: "Curiosity over comfort",
    subtitle: "I explore, even when it's hard.",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: TrendingUp,
    title: "Build consistently",
    subtitle: "Small steps compound.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: BookOpen,
    title: "Learn by doing",
    subtitle: "Theory is a start, building makes it real.",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: Target,
    title: "Build with purpose",
    subtitle: "Technology is most powerful when it helps people.",
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10 border-indigo-500/20",
  },
];

const selectedWorks = [
  {
    title: "Loop",
    subtitle: "Music platform for the next generation.",
    icon: Music,
    color: "from-purple-500 to-indigo-600",
    href: "#projects",
  },
  {
    title: "Quizify",
    subtitle: "Turn your study material into quizzes.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    href: "#projects",
  },
  {
    title: "Sentinel",
    subtitle: "Mental wellness for uniformed forces.",
    icon: Shield,
    color: "from-rose-500 to-amber-500",
    href: "#projects",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden bg-black text-white"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Developer desk at night with laptop, warm lamp, coffee mug, notebooks, clean aesthetic
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <picture>
          <source srcSet="/experience-journey.webp" type="image/webp" />
          <img
            src="/experience-journey.jpg"
            alt="Late Night Developer Desk Journey"
            className="w-full h-full object-cover object-[center_top] opacity-65"
            loading="lazy"
          />
        </picture>

        {/* Mobile atmospheric contrast overlay: ensures crisp text readability while preserving the desk & monitor glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90 sm:hidden pointer-events-none z-[1]" />

        {/* Seamless top blend with Skills section */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Velvety left and center dark overlay for razor-sharp typography contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[68%] bg-gradient-to-r from-black via-black/92 to-transparent z-10 pointer-events-none" />

        {/* Seamless bottom blend into Contact section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Subtle cyan ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[160px] rounded-full" />
      </div>

      {/* =========================================================================
          MARGINAL ATMOSPHERIC QUOTES
          ========================================================================= */}
      <div className="hidden 2xl:block absolute left-8 top-36 text-left font-mono text-[10px] tracking-widest text-zinc-500 select-none pointer-events-none leading-relaxed">
        <div>SAME</div>
        <div>CURIOSITY.</div>
        <div>BIGGER</div>
        <div>POSSIBILITIES.</div>
      </div>

      <div className="hidden 2xl:block absolute left-8 bottom-56 text-left font-mono text-[10px] tracking-widest text-zinc-500 select-none pointer-events-none leading-relaxed">
        <div>DISCIPLINE</div>
        <div>BUILDS</div>
        <div>FREEDOM.</div>
      </div>

      <div className="hidden 2xl:block absolute right-8 top-32 text-right font-handwriting text-2xl text-zinc-400 select-none pointer-events-none leading-tight">
        <div>A Better</div>
        <div>You</div>
        <div>A Brighter</div>
        <div>Tomorrow.</div>
      </div>

      <div className="hidden 2xl:block absolute right-8 bottom-48 text-right font-handwriting text-2xl text-zinc-400 select-none pointer-events-none leading-tight">
        <div>Ideas Build</div>
        <div>Better</div>
        <div>Futures.</div>
      </div>

      {/* =========================================================================
          MAIN CONTAINER
          ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            HEADER SECTION
            ========================================================================= */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs md:text-sm tracking-widest text-sky-400 font-bold uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
              04 / EXPERIENCE
            </span>
            <div className="w-10 h-[1px] bg-sky-500/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            How I got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 text-glow-blue">
              here.
            </span>
          </h2>

          <p className="mt-2.5 text-base sm:text-lg text-zinc-300 max-w-2xl">
            A journey from learning the fundamentals to building real products.
          </p>
        </div>

        {/* =========================================================================
            MAIN TWO-COLUMN LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* =======================================================================
              LEFT COLUMN: TIMELINE (7 COLS)
              ======================================================================= */}
          <div className="lg:col-span-7 relative">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute top-4 bottom-8 left-[52px] sm:left-[80px] w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500/60 to-zinc-800" />

            <div className="space-y-12">
              {timelineItems.map((item) => (
                <div
                  key={item.year}
                  className="relative flex items-start gap-3 sm:gap-6"
                >
                  {/* Year Label */}
                  <div className="w-11 sm:w-16 text-right shrink-0 pt-0.5">
                    <span
                      className={cn(
                        "text-xs sm:text-base font-mono font-extrabold tracking-wider",
                        item.year === "NOW"
                          ? "text-cyan-400 text-glow"
                          : "text-zinc-400"
                      )}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Glowing Node on Timeline Line */}
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-1 -ml-2.5 sm:-ml-2.5 z-10">
                    {item.year === "NOW" ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-4 h-4 rounded-full bg-cyan-400/40 animate-ping" />
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] border-2 border-black" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] border border-black" />
                    )}
                  </div>

                  {/* Milestone Content + Preview Card */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 items-start pl-2">
                    {/* Left text block (7 cols on md) */}
                    <div className="md:col-span-7">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-zinc-900/90 text-zinc-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right preview card (5 cols on md) */}
                    <div className="md:col-span-5">
                      {item.type === "website" && (
                        <div className="group rounded-xl bg-zinc-950/80 border border-white/10 p-3 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                          <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
                            {/* Mockup UI header */}
                            <div className="flex items-center gap-1.5 opacity-60">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
                            </div>
                            <div className="text-center my-auto">
                              <div className="text-xs font-bold text-white tracking-wide">
                                My First Website
                              </div>
                              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                                static · vanilla css
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500 mt-2 text-center">
                            {item.caption}
                          </p>
                        </div>
                      )}

                      {item.type === "code" && (
                        <div className="group rounded-xl bg-zinc-950/80 border border-white/10 p-3 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 shadow-lg">
                          <div className="aspect-[16/10] rounded-lg bg-black/90 border border-white/5 p-3 font-mono text-[10px] text-zinc-300 flex flex-col justify-between relative overflow-hidden">
                            <div className="flex items-center justify-between opacity-60 pb-1 border-b border-white/5">
                              <span className="text-[9px] text-zinc-400">server.js</span>
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                              </div>
                            </div>
                            <div className="leading-snug text-zinc-400 py-1">
                              <span className="text-blue-400">app</span>.<span className="text-yellow-300">get</span>(<span className="text-green-300">'/api'</span>, (req, res) =&gt; &#123;<br />
                              &nbsp;&nbsp;res.<span className="text-yellow-300">json</span>(&#123; <span className="text-zinc-300">ok</span>: <span className="text-purple-400">true</span> &#125;);<br />
                              &#125;);
                            </div>
                            <div className="flex justify-end">
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                            </div>
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500 mt-2 text-center">
                            {item.caption}
                          </p>
                        </div>
                      )}

                      {item.type === "loop" && (
                        <a
                          href="#projects"
                          className="group block rounded-xl bg-zinc-950/80 border border-white/10 p-3 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
                        >
                          <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-indigo-950/60 via-black to-zinc-950 border border-white/5 p-2.5 flex flex-col justify-between relative overflow-hidden">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-3.5 h-3.5 rounded bg-purple-500/20 flex items-center justify-center">
                                  <Music className="w-2 h-2 text-purple-400" />
                                </div>
                                <span className="text-[11px] font-bold text-white">Loop</span>
                              </div>
                              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-500/30">
                                SSR App
                              </span>
                            </div>
                            <div className="my-auto text-center">
                              <div className="text-[11px] font-bold text-zinc-200">
                                Music for a better you.
                              </div>
                              <div className="text-[9px] text-zinc-400">
                                React · TanStack · Supabase
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                          </div>
                          <p className="text-[10px] font-mono text-zinc-500 mt-2 text-center group-hover:text-zinc-400 transition-colors">
                            {item.caption}
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: BENTO CARDS (5 COLS)
              ======================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* BENTO CARD 1: WHAT I'VE LEARNED */}
            <div
              className="rounded-2xl bg-zinc-950/75 backdrop-blur-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    WHAT I'VE LEARNED
                  </h4>
                </div>
                <span className="text-xs font-mono text-zinc-600">//</span>
              </div>

              <div className="space-y-4">
                {philosophies.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform",
                          p.bgColor
                        )}
                      >
                        <Icon className={cn("w-4 h-4", p.iconColor)} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {p.title}
                        </h5>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                          {p.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BENTO CARD 2: SELECTED WORK */}
            <div
              className="rounded-2xl bg-zinc-950/75 backdrop-blur-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                  <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    SELECTED WORK
                  </h4>
                </div>
                <span className="text-xs font-mono text-zinc-600">//</span>
              </div>

              <div className="space-y-3">
                {selectedWorks.map((work, idx) => {
                  const Icon = work.icon;
                  return (
                    <a
                      key={idx}
                      href={work.href}
                      className="group flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform",
                            work.color
                          )}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {work.title}
                          </h5>
                          <p className="text-xs text-zinc-400 leading-none mt-0.5">
                            {work.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM METADATA BAR (Scroll to Explore & Section 05 / 06 Pagination)
            ========================================================================= */}
        <div className="mt-14 md:mt-18 pt-7 border-t border-white/5 flex items-center justify-between gap-4 text-zinc-400">
          {/* Scroll to explore indicator */}
          <a
            href="#contact"
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
          <div className="hidden sm:block text-center">
            <span className="font-['Caveat',cursive] text-2xl text-zinc-400 tracking-wide">
              Discipline builds freedom.
            </span>
          </div>

          {/* Section Pagination (05 / 06) */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">05</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-500">06</span>
            </div>

            {/* Progress Line */}
            <div className="w-10 sm:w-12 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-5/6 h-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1 text-zinc-400">
              <a href="#skills" className="p-1 hover:text-white transition-colors" aria-label="Previous section">
                <ChevronLeft className="w-4 h-4" />
              </a>
              <a href="#contact" className="p-1 hover:text-white transition-colors" aria-label="Next section">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
