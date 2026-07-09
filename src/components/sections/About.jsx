import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import RevealText from "../ui/RevealText";

export default function About() {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} id="about" className="py-32 relative">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            style={{ y: isMobile ? 0 : yImage }}
            className="w-full md:w-[45%] justify-center hidden md:flex"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2 group hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-shadow duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
                alt="Sautrik Developer"
                className="w-full h-full object-cover rounded-2xl filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            style={{ y: isMobile ? 0 : yText }}
            initial={isMobile ? { opacity: 0, y: 30 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[55%] space-y-8"
          >
            <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              <RevealText text="Driven by" className="inline-block" /> <br/>
              <RevealText text="Curiosity." className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-glow" />
            </div>
            <div className="space-y-5 text-zinc-300 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                I am a first-year B.Tech CSE Core student at SRMIST with a relentless drive for building systems that solve real-world problems.
              </p>
              <p>
                My journey spans competitive hackathons to architecting fluid, full-stack applications. I don't just write code—I craft scalable ecosystems with pixel-perfect UI/UX integrations.
              </p>
              <p>
                When I'm not designing algorithms or debugging highly-optimized backends, I'm deep diving into Fintech innovations, quantitative development, and system design.
              </p>
            </div>
            
            <div className="pt-6 flex items-center gap-12 border-t border-white/10">
              <div>
                <p className="text-4xl font-extrabold text-white mb-2">3+</p>
                <p className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Years Coding</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white mb-2">20+</p>
                <p className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
