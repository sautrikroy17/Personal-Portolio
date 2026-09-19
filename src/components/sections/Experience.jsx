import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Users,
  GitPullRequest,
  ShieldCheck,
  Globe,
  Terminal,
  Layers,
  Code2,
} from "lucide-react";
import { AzureIcon, DockerIcon, ReactIcon, TypescriptIcon, GitIcon } from "../ui/TechIcons";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section
      id="experience"
      className="relative min-h-screen pt-12 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-black text-white"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Developer tech workstation with server racks, glowing blue/cyan LEDs, code monitor & keyboard
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <picture>
          <source srcSet="/experience-workspace.webp" type="image/webp" />
          <img
            src="/experience-workspace.jpg"
            alt="Experience Server Infrastructure Lab"
            className="w-full h-full object-cover object-[center_top] opacity-75"
            loading="lazy"
          />
        </picture>

        {/* Seamless top blend with Skills section */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-zinc-950 via-zinc-950/85 to-transparent z-10" />

        {/* Left vignette for maximum typography readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[50%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

        {/* Bottom fade into Contact section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent z-10" />

        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Right Ambient Watermark Quote */}
        <div className="hidden xl:block absolute top-0 right-8 text-right text-[10px] font-mono tracking-widest text-zinc-600 select-none pointer-events-none leading-relaxed">
          <div>SCALE</div>
          <div>IMPACT</div>
          <div>EXECUTE</div>
        </div>

        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="mb-12 md:mb-16">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]" />
            <span className="text-[11px] font-mono font-medium tracking-wider text-blue-300 uppercase">
              LEADERSHIP · OPEN SOURCE · RECOGNITION
            </span>
          </div>

          {/* Section Title & Number */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-1">
                04 / EXPERIENCE & IMPACT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Where ambition meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 text-glow-blue">
                  execution.
                </span>
              </h2>
            </div>

            {/* Handwritten Quote */}
            <div className="hidden md:block text-right">
              <p className="font-handwriting text-2xl text-cyan-300 -rotate-2 drop-shadow-[0_2px_12px_rgba(34,211,238,0.3)]">
                "Every commit counts. Every system scales."
              </p>
              <span className="text-[11px] font-mono text-zinc-400">
                — Sautrik Roy
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Leading campus developer initiatives, contributing to distributed open-source codebases, and engineering national-scale AI platforms for India's Uniformed Forces.
          </p>
        </div>

        {/* =========================================================================
            MAIN BENTO GRID
            ========================================================================= */}
        <div className="space-y-6">
          {/* ROW 1: TWO FEATURED ROLES (MLSA & GSSoC) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CARD 1: MICROSOFT LEARN STUDENT AMBASSADOR (MLSA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_10px_35px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-colors" />

              <div>
                {/* Header: Role & Period Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    CAMPUS AMBASSADOR
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Jan 2025 – Present</span>
                  </div>
                </div>

                {/* Organization & Role */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
                    <AzureIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      Microsoft Learn Student Ambassador
                    </h3>
                    <p className="text-sm font-medium text-blue-400/90 flex items-center gap-1.5 mt-0.5">
                      <span>MLSA Community</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400">Cloud & Full-Stack Track</span>
                    </p>
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 my-5 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      200<span className="text-blue-400">+</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      Devs Empowered
                    </div>
                  </div>
                  <div className="text-center sm:text-left border-x border-white/5 px-2 sm:px-3">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      4<span className="text-cyan-400">+</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      Cloud Workshops
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      50<span className="text-blue-400">+</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      Students Mentored
                    </div>
                  </div>
                </div>

                {/* Achievement Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Spearheaded <strong className="text-white">4+ technical workshops</strong> empowering 200+ campus developers in Azure Cloud architecture, Docker containerization fundamentals, and modern full-stack engineering.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Mentored <strong className="text-white">50+ junior students</strong> in developer tooling and cloud fundamentals, promoting collaborative Git/GitHub workflows, code reviews, and production standards.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Footer Tech Tags & Verification */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {["Azure Cloud", "Docker", "Git/GitHub", "DevOps", "Full-Stack"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-blue-950/30 text-blue-300/90 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.linkedin.com/in/sautrik-roy-1779r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Verify Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </motion.div>

            {/* CARD 2: GIRLSCRIPT SUMMER OF CODE (GSSoC) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_10px_35px_rgba(16,185,129,0.15)]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />

              <div>
                {/* Header: Role & Period Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN SOURCE CONTRIBUTOR
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2025</span>
                  </div>
                </div>

                {/* Organization & Role */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border border-emerald-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform">
                    <GitPullRequest className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      GirlScript Summer of Code
                    </h3>
                    <p className="text-sm font-medium text-emerald-400/90 flex items-center gap-1.5 mt-0.5">
                      <span>GSSoC 2025</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400">Open Source Program</span>
                    </p>
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 my-5 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      8<span className="text-emerald-400">+</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      Merged Pull Requests
                    </div>
                  </div>
                  <div className="text-center sm:text-left border-x border-white/5 px-2 sm:px-3">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      5<span className="text-teal-400"></span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      Frontend Bugs Fixed
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      100<span className="text-emerald-400">%</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      CI/CD Passing
                    </div>
                  </div>
                </div>

                {/* Achievement Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Merged <strong className="text-white">8+ pull requests</strong> across distributed open-source repositories; resolved 5 critical frontend bugs and optimized component render cycles in React and TypeScript.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Collaborated with maintainers in an <strong className="text-white">Agile setting</strong>, conducting peer code reviews, verifying PRs through GitHub Actions CI/CD workflows, and authoring unit tests using Vitest/Jest.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Footer Tech Tags & GitHub Link */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {["React", "TypeScript", "GitHub Actions", "Vitest", "Jest", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-emerald-950/30 text-emerald-300/90 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/sautrikroy17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ROW 2: HONORS & EDUCATION (SIH 2025 & SRM IST) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* CARD 3: SMART INDIA HACKATHON 2025 (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7 group relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)]"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    NATIONAL LEVEL SHORTLIST · SIH26186
                  </div>
                  <span className="text-xs font-mono text-amber-400/90 font-semibold">
                    Ministry of Home Affairs (MHA)
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      Smart India Hackathon (SIH) 2025
                    </h3>
                    <p className="text-sm font-medium text-zinc-400 mt-0.5">
                      AI Welfare Monitoring System for India's Uniformed Forces
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-4 mb-5">
                  Shortlisted at the prestigious <strong className="text-white">National Level</strong> by the Ministry of Home Affairs for engineering <span className="text-cyan-300 font-semibold">Sentinel</span>, an AI-powered tele-mental health platform with predictive burnout screening, offline-first IndexedDB caching, and real-time WebRTC consultations.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {["Ministry of Home Affairs", "AI Predictive Scoring", "WebRTC", "Offline PWA", "Sentinel Platform"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-amber-950/20 text-amber-300/90 border border-amber-500/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  Problem Statement: SIH26186
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold transition-colors group/link"
                >
                  <span>Explore Sentinel in Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* CARD 4: ACADEMIC FOUNDATION & SRM IST (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 group relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_10px_35px_rgba(99,102,241,0.15)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    B.TECH CSE (CORE)
                  </div>
                  <span className="text-xs font-mono text-zinc-400">Batch 2025–2029</span>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    SRM Institute of Science and Technology
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-indigo-400" />
                    Kattankulathur, Chennai, India
                  </p>
                </div>

                {/* CGPA Badge */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/50 to-blue-950/40 border border-indigo-500/30 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-indigo-300 tracking-wider block">
                      Cumulative Academic GPA
                    </span>
                    <span className="text-xs text-zinc-400">
                      Dean's List / Consistent Distinction
                    </span>
                  </div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 font-mono">
                    8.77 <span className="text-xs text-zinc-400 font-normal">/ 10.0</span>
                  </div>
                </div>

                {/* Key Coursework */}
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Core CS Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures & Algorithms",
                      "OOP (C++)",
                      "DBMS & SQL",
                      "Operating Systems",
                      "Computer Networks",
                      "Software Engineering",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Expected May 2029</span>
                <span className="text-indigo-400 font-medium">Core Engineering</span>
              </div>
            </motion.div>
          </div>

          {/* ROW 3: CERTIFICATIONS & RESUME ACCESS BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-400 shadow-lg shadow-blue-500/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-sm sm:text-base font-bold text-white">
                    Microsoft Certified: Azure Fundamentals
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    In Progress
                  </span>
                </div>
                <p className="text-xs text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Languages:</span>
                  <span className="text-zinc-300 font-medium">English (Professional)</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-300 font-medium">Bengali (Native)</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-300 font-medium">Hindi (Conversational)</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-300 font-medium">German (A1)</span>
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-4 h-4 text-blue-100" />
              <span>View Official Resume (PDF)</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* =========================================================================
            BOTTOM NAVIGATION & JOURNEY TIMELINE
            ========================================================================= */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Scroll to Connect */}
          <a
            href="#contact"
            className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 hover:text-white transition-colors uppercase tracking-wider group"
          >
            <div className="w-5 h-7 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-zinc-500 transition-colors">
              <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
            </div>
            <span>SCROLL TO CONNECT</span>
            <div className="hidden sm:block w-10 h-[1px] bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
          </a>

          {/* Interactive Timeline Journey */}
          <div className="flex items-center gap-3 sm:gap-6 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">01</span>
              <span className="text-zinc-400 hidden sm:inline">Learn</span>
            </div>
            <div className="w-4 sm:w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">02</span>
              <span className="text-zinc-400 hidden sm:inline">Build</span>
            </div>
            <div className="w-4 sm:w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">03</span>
              <span className="text-zinc-400 hidden sm:inline">Ship</span>
            </div>
            <div className="w-4 sm:w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
              <span className="text-blue-400 font-bold">04</span>
              <span className="text-white font-bold">Lead</span>
            </div>
            <div className="w-4 sm:w-6 h-[1px] bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 font-bold">05</span>
              <span className="text-zinc-400 hidden sm:inline">Connect</span>
            </div>
          </div>

          {/* Right: Next Section Link: 05 / CONTACT -> */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-zinc-700/60 hidden sm:block" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider group"
            >
              <span>05 / CONTACT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
