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
    // Lock scroll globally
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 2000; // 2 seconds total loading
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
        }, 800); // Wait for logo to finish drawing
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
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center gap-10">
        <SRLogo className="w-24 h-24 sm:w-32 sm:h-32" />
        
        <div className="flex flex-col items-center gap-4">
          <div className="text-3xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {progress}%
          </div>
          
          <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
