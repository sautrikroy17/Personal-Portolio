import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

const projects = [
  {
    id: 1,
    title: "Legacy Lens",
    description: "Built for a competitive hackathon, an AI-powered tool that converts natural language into complex database queries, bridging the gap between non-technical users and databases.",
    tags: ["React", "Node.js", "Gemini AI", "MongoDB", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    featured: true,
    liveUrl: "https://legacy-lens-beta.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/LegacyLens-2.O",
  },
  {
    id: 2,
    title: "Quizzify AI",
    description: "An AI-driven quiz generator built with a resilient C++ backend for complex scheduling and dynamic scaling. Full stack implementation with Next.js frontend.",
    tags: ["Next.js", "C++", "Tailwind", "Gemini API"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "https://quizzify-ai.vercel.app",
    githubUrl: "https://github.com/sautrikroy17/Quizzify",
  },
  {
    id: 3,
    title: "Credit Card Validator",
    description: "A robust credit card validation engine utilizing the Luhn algorithm for fast, secure, and offline checking. Highly optimized logic.",
    tags: ["C++", "Algorithms", "Terminal"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/sautrikroy17",
  },
  {
    id: 4,
    title: "Future Venture: Fintech Engine",
    description: "An upcoming project researching quantitative development, algorithmic logic, and high-frequency data structures for DeFi and banking tech.",
    tags: ["Fintech", "Go / Rust", "Analytics"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-[2.5rem] glass-card transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] hover:border-cyan-400/40 ${
        project.featured ? "md:col-span-2 md:flex md:h-[450px]" : "h-[500px] flex flex-col"
      }`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${project.featured ? "md:w-[55%] h-64 md:h-full" : "h-60"}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent z-10 md:bg-gradient-to-r" />
        <motion.img
          style={{ y: yImage }}
          src={project.image}
          alt={project.title}
          className="w-full h-[120%] object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className={`p-8 md:p-10 flex flex-col justify-between z-20 relative ${project.featured ? "md:w-[45%]" : "flex-1"}`}>
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-500/20 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mt-auto">
          <a href={project.liveUrl} className="flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors">
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
          <a href={project.githubUrl} className="flex items-center text-sm font-bold text-zinc-400 hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5 mr-2" />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work.</span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl font-medium leading-relaxed">
            A curated collection of scalable systems and fluid interfaces showcasing my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
