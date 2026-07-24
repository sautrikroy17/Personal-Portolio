import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Preloader from "./components/ui/Preloader";
import CommandPalette from "./components/ui/CommandPalette";
import InteractiveGrid from "./components/ui/InteractiveGrid";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-cyan-500/30 bg-slate-950 flex flex-col overflow-x-hidden">
      <CommandPalette />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Static premium gradient background — GPU composited, zero JS */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        {/* CSS-only animated orbs — no JS, no Framer, GPU only */}
        <div className="orb orb-blue" />
        <div className="orb orb-cyan" />
      </div>

      <InteractiveGrid />

      <div className="relative z-10 w-full flex-1">
        <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          <footer className="relative z-10 border-t border-white/5 py-6 text-center">
            <p className="text-zinc-600 text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} Sautrik Roy &mdash; Licensed under the MIT License
            </p>
          </footer>
      </div>
    </div>
  );
}

export default App;
