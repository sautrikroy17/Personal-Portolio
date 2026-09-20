import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, BookOpen, Users, Sprout, Layers } from "lucide-react";
import {
  CppIcon,
  JavaIcon,
  PythonIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  FramerMotionIcon,
  VueIcon,
  NodeIcon,
  ExpressIcon,
  GoIcon,
  MongoIcon,
  MySQLIcon,
  GeminiIcon,
  OpenAIIcon,
  NumpyIcon,
  PandasIcon,
  GitIcon,
  DockerIcon,
  ViteIcon,
  FigmaIcon,
  AWSIcon,
  LinuxIcon,
} from "../ui/TechIcons";

const stackCategories = [
  {
    number: "01",
    name: "Languages",
    description: "The foundation for what I build.",
    skills: [
      { name: "C++", icon: CppIcon },
      { name: "Java", icon: JavaIcon },
      { name: "Python", icon: PythonIcon },
      { name: "JavaScript", icon: JSIcon },
      { name: "TypeScript", icon: TSIcon },
    ],
  },
  {
    number: "02",
    name: "Frontend",
    description: "Interfaces that feel alive.",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Framer Motion", icon: FramerMotionIcon },
      { name: "Vue", icon: VueIcon },
    ],
  },
  {
    number: "03",
    name: "Backend",
    description: "Powering ideas at scale.",
    skills: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "C++", icon: CppIcon },
      { name: "Go", icon: GoIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
  {
    number: "04",
    name: "AI / Data",
    description: "Turning data into intelligence.",
    skills: [
      { name: "Gemini API", icon: GeminiIcon },
      { name: "AI Integrations", icon: OpenAIIcon },
      { name: "NumPy", icon: NumpyIcon },
      { name: "Pandas", icon: PandasIcon },
    ],
  },
  {
    number: "05",
    name: "Tools",
    description: "Build. Collaborate. Ship.",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Vite", icon: ViteIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Linux", icon: LinuxIcon },
    ],
  },
];

const exploringPoints = [
  {
    icon: Lightbulb,
    title: "Smarter Products",
    subtitle: "Leveraging AI to solve real problems.",
  },
  {
    icon: BookOpen,
    title: "Deeper Expertise",
    subtitle: "Strengthening fundamentals and exploring new technologies.",
  },
  {
    icon: Users,
    title: "Real Impact",
    subtitle: "Building for people, not just portfolios.",
  },
  {
    icon: Sprout,
    title: "A Better Tomorrow",
    subtitle: "Using technology to create opportunities and positive change.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden bg-black text-white">
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Developer tech workstation with dual code monitors, terminal, keyboard & cyan ambient glow
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <picture>
          <source srcSet="/skills-workspace.webp" type="image/webp" />
          <img
            src="/skills-workspace.jpg"
            alt="Skills Tech Workspace Studio"
            className="w-full h-full object-cover object-[center_top] opacity-80"
            loading="lazy"
          />
        </picture>

        {/* Seamless top blend with Projects section - perfectly connects the developer studio journey */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Left vignette for maximum typography readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[48%] bg-gradient-to-r from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Bottom fade into Experience section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent z-10 pointer-events-none" />

        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Right Ambient Watermark Quote */}
        <div className="hidden xl:block absolute top-0 right-8 text-right text-[10px] font-mono tracking-widest text-zinc-600 select-none pointer-events-none leading-relaxed">
          <div>IDEAS</div>
          <div>BUILD</div>
          <div>BETTER</div>
          <div>FUTURES.</div>
        </div>

        {/* =========================================================================
            3-COLUMN MAIN LAYOUT (Header / 5 Stack Categories / 2 Right Bento Cards)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* -------------------------------------------------------------
              LEFT COLUMN: Title, Subtitle, Motto & Vertical Keywords
              ------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-2">
            <div>
              {/* Section Tracker Label: 03 / STACK */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-400 font-semibold uppercase">
                  03 / STACK
                </span>
                <div className="w-10 h-[1px] bg-zinc-700/60" />
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.08]">
                The stack
                <br />
                behind the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  work.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Tools I use to turn ideas into reliable, polished products.
              </p>

              {/* Handwritten Quote */}
              <div className="relative pt-1">
                <p className="font-['Caveat',cursive] text-2xl md:text-3xl text-zinc-400 leading-snug">
                  Same Curiosity.
                  <br />
                  Bigger Possibilities.
                </p>
                <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-2 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              </div>
            </div>

            {/* Bottom-left vertical keywords */}
            <div className="hidden lg:block mt-24 text-[10px] font-mono tracking-widest text-zinc-600 space-y-1 select-none">
              <div className="flex items-center gap-2">
                <span>BUILD</span>
                <div className="w-6 h-[1px] bg-zinc-800" />
              </div>
              <div>EXPLORE</div>
              <div>ITERATE</div>
              <div>REPEAT</div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              CENTER COLUMN: 5 Stack Categories in Stacked Glass Cards
              ------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-4">
            {stackCategories.map((cat) => (
              <div
                key={cat.number}
                className="relative rounded-2xl border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-4 sm:p-5 hover:border-cyan-500/35 transition-all duration-300 group shadow-lg"
              >
                {/* Header row: Number + Name + Description */}
                <div className="mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      {cat.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-normal">
                    {cat.description}
                  </p>
                </div>

                {/* Tech icons row */}
                <div className="grid grid-cols-3 min-[400px]:grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-2.5 pt-1">
                  {cat.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-cyan-500/40 hover:scale-105 transition-all duration-200 group/icon cursor-default shadow-sm min-h-[64px]"
                        title={skill.name}
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                          <IconComponent className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-medium text-zinc-300 mt-1.5 text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* -------------------------------------------------------------
              RIGHT COLUMN: 2 Feature Cards (Currently Exploring + My Stack)
              ------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-5">
            {/* CARD 1: CURRENTLY EXPLORING WITH 3D GLOBE */}
            <div
              className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-5 sm:p-6 shadow-xl hover:border-sky-500/35 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-sky-400">
                  CURRENTLY EXPLORING
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  what's next.
                </span>
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                Deepening my skills across full-stack engineering, AI, and modern product development.
              </p>

              {/* Points & Wireframe Globe Area */}
              <div className="relative">
                {/* 4 Interactive Key Points */}
                <div className="space-y-3.5 pr-0 sm:pr-20">
                  {exploringPoints.map((pt) => {
                    const PtIcon = pt.icon;
                    return (
                      <div key={pt.title} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mt-0.5 shrink-0">
                          <PtIcon className="w-3 h-3" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-zinc-200 leading-tight">
                            {pt.title}
                          </h4>
                          <p className="text-[11px] text-zinc-400 leading-normal mt-0.5">
                            {pt.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Floating 3D Glowing Wireframe Globe & Script */}
                <div className="hidden sm:flex absolute top-0 right-0 w-28 h-36 flex-col items-center justify-center pointer-events-none">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_35s_linear_infinite] text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
                      <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                      <ellipse cx="50" cy="50" rx="18" ry="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                      <circle cx="78" cy="40" r="3" fill="#38BDF8" className="animate-ping" />
                      <circle cx="78" cy="40" r="2.5" fill="#38BDF8" />
                    </svg>
                  </div>

                  <div className="font-['Caveat',cursive] text-sm text-zinc-400 leading-tight text-center mt-1">
                    <div>Learn.</div>
                    <div>Build.</div>
                    <div>Explore.</div>
                    <div>Grow.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: MY STACK & IMPACT */}
            <div
              className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-5 sm:p-6 shadow-xl hover:border-sky-500/35 transition-all duration-300 group overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-sky-400">
                    MY STACK
                  </span>
                </div>
                <Layers className="w-4 h-4 text-sky-400/80" />
              </div>

              {/* Title & Floating Script */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  Powered by the tools
                  <br />
                  that turn ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                    impact.
                  </span>
                </h3>

                <div className="hidden sm:block font-['Caveat',cursive] text-sm text-zinc-400 leading-tight text-right shrink-0">
                  <div>Build.</div>
                  <div>Learn.</div>
                  <div>Ship.</div>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                Carefully selected frameworks and platforms for production-ready development.
              </p>

              {/* 3 Metric Pills / Feature Rows */}
              <div className="grid grid-cols-3 gap-2.5 pt-1 border-t border-white/5">
                {[
                  { value: "Full Stack", label: "End-to-End" },
                  { value: "AI + LLMs", label: "Smart Systems" },
                  { value: "Clean UI", label: "Design Systems" },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 text-center"
                  >
                    <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-zinc-400 font-normal truncate mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM METADATA BAR (Timeline Journey & 04 / EXPERIENCE ->)
            ========================================================================= */}
        <div className="mt-14 md:mt-18 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Scroll to explore indicator */}
          <a
            href="#experience"
            className="group flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
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

          {/* Interactive Timeline Journey: 01 Learn — 02 Build — 03 Ship — 04 Refine */}
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">01</span>
              <span className="text-zinc-400">Learn</span>
            </div>
            <div className="w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-sky-400 font-bold">02</span>
              <span className="text-white font-bold">Build</span>
            </div>
            <div className="w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">03</span>
              <span className="text-zinc-400">Ship</span>
            </div>
            <div className="w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">04</span>
              <span className="text-zinc-400">Refine</span>
            </div>
          </div>

          {/* Right: Next Section Link: 04 / EXPERIENCE -> */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-zinc-700/60 hidden sm:block" />
            <a
              href="#experience"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors uppercase tracking-wider group"
            >
              <span>04 / EXPERIENCE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
