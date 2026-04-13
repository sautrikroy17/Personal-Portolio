import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-cyan-500/30 bg-slate-950 flex flex-col">
      {/* Global Animated Premium Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        {/* Minimalist Black and Deep Navy Blue Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0f172a_0%,_#020617_40%,_#000000_100%)]"></div>
      </div>

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
      </div>

      {/* MITS Copyright Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 text-center">
        <p className="text-zinc-600 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Sautrik Roy &mdash; Manipal Institute of Technology Sciences (MITS)
        </p>
      </footer>
    </div>
  );
}

export default App;
