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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80 z-0"></div>
        {/* Floating massive color orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[140px] mix-blend-screen animate-pulse z-10" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[130px] mix-blend-screen animate-pulse z-10" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/15 blur-[160px] mix-blend-screen animate-pulse z-10" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        {/* Overlay grid for premium tech look */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-20"></div>
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
    </div>
  );
}

export default App;
