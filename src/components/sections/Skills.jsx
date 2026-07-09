import { motion } from "framer-motion";
import SpotlightCard from "../ui/SpotlightCard";
import RevealText from "../ui/RevealText";
import Marquee from "../ui/Marquee";

const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vue", "TypeScript"],
  Backend: ["Node.js", "Express", "C++", "Go", "MongoDB", "MySQL"],
  Tools: ["Git", "Docker", "Vite", "Figma", "AWS", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="hidden md:block absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Interactive Infinite Marquee */}
      <div className="mb-24 -rotate-2 relative z-10">
        <Marquee baseVelocity={2} className="text-6xl md:text-[8rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] opacity-50 hover:opacity-100 hover:[-webkit-text-stroke:2px_rgba(34,211,238,0.5)] transition-all duration-500">
          SAUTRIK ROY — FULL STACK DEVELOPER — 
        </Marquee>
        <Marquee baseVelocity={-2} className="text-6xl md:text-[8rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] opacity-50 hover:opacity-100 hover:[-webkit-text-stroke:2px_rgba(34,211,238,0.5)] transition-all duration-500 mt-2">
          INNOVATE — DESIGN — BUILD — SCALABLE — 
        </Marquee>
      </div>

      <div className="max-w-5xl px-6 mx-auto">
        <div className="mb-20 md:text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight flex justify-center flex-wrap gap-x-2">
            <RevealText text="My" className="inline-block" />
            <RevealText text="Tech Stack." className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl md:mx-auto">
            Technologies I use to bring ideas to life, from pixel-perfect interfaces to robust, scalable backends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard spotLightColor="rgba(34, 211, 238, 0.15)" className="glass-card p-10 rounded-3xl relative group hover:border-cyan-500/30 transition-colors duration-500 h-full">
                <div className="absolute top-0 right-8 -mt-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center relative z-20">
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-20">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900/80 rounded-xl border border-white/5 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
