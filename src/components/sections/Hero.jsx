import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax Values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Parallax Background Gradients */}
      <motion.div style={{ y: yBg, scale: scaleImage }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/40 blur-[150px] rounded-full" />
      </motion.div>
      
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 w-full max-w-5xl px-6 mx-auto flex flex-col items-center text-center mt-[-8vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-4 py-2 mb-8 text-xs sm:text-sm font-bold rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-300 backdrop-blur-md uppercase tracking-widest"
        >
          <span className="w-2 h-2 mr-3 rounded-full bg-blue-500 animate-pulse" />
          Full Stack Developer & Part-Time Vibe Coder 👨‍💻
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter text-white mb-6 leading-tight md:leading-[1.1] pb-2"
        >
          I'm <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-blue-600 text-glow pb-2">Sautrik Roy</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 text-lg sm:text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed tracking-tight"
        >
          I architect fast, scalable systems and pixel-perfect interfaces. 
          Turning complex problems into seamless digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all bg-white/5 rounded-2xl hover:bg-white/10 backdrop-blur-xl border border-white/5 hover:border-blue-500/30"
          >
            Explore Work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-blue-950/40 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Social Icons mapped to absolute bottom with absolute spacing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 sm:bottom-16 w-full flex justify-center items-center space-x-10 text-zinc-600 z-20"
      >
        <a href="https://github.com/sautrikroy17" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2">
          <GithubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/sautrik-roy-1779r" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2">
          <LinkedinIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:sautrikroy2006@gmail.com" className="hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer p-2">
          <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>
    </section>
  );
}
