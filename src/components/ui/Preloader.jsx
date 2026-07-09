import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SRLogo from "./SRLogo";

export default function Preloader({ onComplete }) {
  // states: init -> speaking -> iris
  const [phase, setPhase] = useState("init");
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      speechSynthesis.cancel();
    };
  }, []);

  const handleEnter = () => {
    if (phase !== "init") return;
    setPhase("speaking");

    // Initialize speech
    const utterance = new SpeechSynthesisUtterance("Hi, I'm Sautrik. Welcome to my world.");
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    // Try to find a good English voice
    const voices = speechSynthesis.getVoices();
    const goodVoice = voices.find(v => 
      v.name.includes("Google UK English Male") || 
      v.name.includes("Daniel") || 
      (v.lang === "en-GB" && v.name.includes("Male")) ||
      v.name.includes("Alex")
    ) || voices[0];
    
    if (goodVoice) utterance.voice = goodVoice;

    let isDone = false;
    const finishIntro = () => {
      if (isDone) return;
      isDone = true;
      setPhase("iris");
      setTimeout(() => {
        document.body.style.overflow = "unset";
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }, 1200); // Wait for iris wipe to finish
    };

    utterance.onend = finishIntro;
    speechSynthesis.speak(utterance);
    
    // Fallback if speech synthesis fails or is blocked
    setTimeout(() => {
      if (!speechSynthesis.speaking && !isDone) {
        finishIntro();
      }
    }, 4000);
  };

  // Ensure voices are loaded (Chrome sometimes needs this)
  useEffect(() => {
    const loadVoices = () => speechSynthesis.getVoices();
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center pointer-events-auto"
      animate={{ clipPath: phase === "iris" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      
      {/* Phase 1: Init Button */}
      <AnimatePresence>
        {phase === "init" && (
          <motion.button
            onClick={handleEnter}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-zinc-900 border border-white/10 rounded-full text-white font-medium tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all flex items-center gap-3 group cursor-none"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Initialize Portfolio
          </motion.button>
        )}
      </AnimatePresence>

      {/* Phase 2: Memoji Speaking */}
      <AnimatePresence>
        {phase === "speaking" && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0], 
              scale: 1 
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5, type: "spring" }
            }}
            exit={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Glow behind memoji */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full scale-[2] animate-pulse" />
            
            <img 
              src="/memoji.png" 
              alt="Sautrik Memoji" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full relative z-10 drop-shadow-2xl ring-2 ring-white/10"
            />
            
            {/* Audio visualizer bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-1.5 items-center justify-center"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [6, 24, 6] }}
                  transition={{ 
                    duration: 0.4, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="w-1.5 bg-cyan-400 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
