import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SRLogo from "./SRLogo";

const GLITCH_CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 2000;
    let animationFrameId;
    let timeoutId;
    let glitchIntervalId;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Trigger Glitch Effect
        setIsGlitching(true);
        glitchIntervalId = setInterval(() => {
          let randomStr = "";
          for(let i=0; i<4; i++) {
            randomStr += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
          setGlitchText(randomStr);
        }, 50);

        timeoutId = setTimeout(() => {
          clearInterval(glitchIntervalId);
          setIsGlitching(false);
          document.body.style.overflow = "unset";
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, 800);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      clearInterval(glitchIntervalId);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      {/* Shatter Panels */}
      <motion.div 
        className="absolute inset-0 bg-zinc-950 origin-top"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      />
      <motion.div 
        className="absolute inset-0 bg-zinc-900 origin-bottom"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } }}
      />
      <motion.div 
        className="absolute inset-0 bg-zinc-950 origin-top"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      />

      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 md:gap-16"
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeOut" } }}
      >
        <div className="relative">
          <SRLogo className="w-24 h-24 md:w-32 md:h-32 relative z-10" />
          <motion.div 
            className="absolute inset-0 bg-cyan-400 blur-[50px] mix-blend-screen opacity-50 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-[6rem] md:text-[15rem] leading-none font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.1)] relative font-mono">
            <span className="opacity-0">{isGlitching ? glitchText : `${progress}%`}</span>
            <motion.span 
              className={`absolute inset-0 ${isGlitching ? "text-cyan-400" : "text-white"} [-webkit-text-stroke:0px] overflow-hidden whitespace-nowrap`}
              style={{ width: `${progress}%` }}
            >
              {isGlitching ? glitchText : `${progress}%`}
            </motion.span>
            <span className="absolute inset-0 pointer-events-none">{isGlitching ? glitchText : `${progress}%`}</span>
          </div>
          <p className="text-cyan-400 uppercase tracking-[0.5em] md:tracking-[1em] font-bold text-xs md:text-sm mt-4 md:mt-0 text-glow">
            {isGlitching ? "OVERRIDING PROTOCOL..." : "System Initializing"}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
