import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Preloader from "./components/ui/Preloader";
import CustomCursor from "./components/ui/CustomCursor";
import CommandPalette from "./components/ui/CommandPalette";
import LiquidRipple from "./components/ui/LiquidRipple";
import InteractiveGrid from "./components/ui/InteractiveGrid";
import ScrollProgressRing from "./components/ui/ScrollProgressRing";
import SpatialWrapper from "./components/ui/SpatialWrapper";
import useSoundEffects from "./hooks/useSoundEffects";

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);
  useSoundEffects(); // Initialize scroll sounds

  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-cyan-500/30 bg-slate-950 flex flex-col overflow-x-hidden">
      
      <CustomCursor />
      <LiquidRipple />
      <CommandPalette />
      <ScrollProgressRing />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay pointer-events-none w-full h-full">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Global Animated Premium Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0f172a_0%,_#020617_40%,_#000000_100%)]"></div>
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[140px]"
        />
      </div>

      <InteractiveGrid />



      <div className="relative z-10 w-full flex-1">
        <Navbar />
        <SpatialWrapper>
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          {/* MIT Copyright Footer */}
          <footer className="relative z-10 border-t border-white/5 py-6 text-center">
            <p className="text-zinc-600 text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} Sautrik Roy &mdash; Licensed under the MIT License
            </p>
          </footer>
        </SpatialWrapper>
      </div>
    </div>
  );
}

export default App;
