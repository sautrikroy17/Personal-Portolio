import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SRLogo from "./SRLogo";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1500; // Faster loading
    let animationFrameId;
    let timeoutId;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        timeoutId = setTimeout(() => {
          document.body.style.overflow = "unset";
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      {/* Shatter Panels */}
      <motion.div 
        className="absolute inset-0 bg-zinc-950 origin-top"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } }}
      />
      <motion.div 
        className="absolute inset-0 bg-zinc-900 origin-bottom"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 } }}
      />
      <motion.div 
        className="absolute inset-0 bg-zinc-950 origin-top"
        exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      />

      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 md:gap-12"
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeOut" } }}
      >
        <div className="relative">
          <SRLogo className="w-20 h-20 md:w-28 md:h-28 relative z-10 opacity-90" />
          <motion.div 
            className="absolute inset-0 bg-cyan-400 blur-[40px] mix-blend-screen opacity-30 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-[5rem] md:text-[10rem] leading-none font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.05)] relative tracking-tighter">
            <span className="opacity-0">{progress}%</span>
            <motion.span 
              className="absolute inset-0 text-white [-webkit-text-stroke:0px] overflow-hidden whitespace-nowrap"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </motion.span>
            <span className="absolute inset-0 pointer-events-none">{progress}%</span>
          </div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] font-medium text-xs md:text-sm mt-2">Loading Experience</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
