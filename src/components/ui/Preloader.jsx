import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SRLogo from "./SRLogo";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("quote"); // quote, morph, iris
  const [textIndex, setTextIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  const quoteText = "Any sufficiently advanced technology is indistinguishable from magic.";
  const authorText = "— Arthur C. Clarke";

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Phase 1: Typewriter Quote
    const typeInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < quoteText.length + authorText.length) {
          return prev + 1;
        }
        clearInterval(typeInterval);
        return prev;
      });
    }, 40); // Fast typing speed

    // Phase 2: Morph to Logo after typing finishes
    const morphTimeout = setTimeout(() => {
      setPhase("morph");
    }, (quoteText.length + authorText.length) * 40 + 600);

    // Phase 3: Iris Wipe and Complete
    const completeTimeout = setTimeout(() => {
      setPhase("iris");
      setTimeout(() => {
        document.body.style.overflow = "unset";
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }, 1200); // Wait for iris wipe to finish
    }, (quoteText.length + authorText.length) * 40 + 2000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(morphTimeout);
      clearTimeout(completeTimeout);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center pointer-events-none"
      animate={{ clipPath: phase === "iris" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      
      {/* Phase 1: Quote */}
      {phase === "quote" && (
        <motion.div 
          className="max-w-3xl px-6 text-center"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed mb-6 font-medium">
            "{quoteText.substring(0, textIndex < quoteText.length ? textIndex : quoteText.length)}"
          </h2>
          {textIndex >= quoteText.length && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-500/80 font-sans tracking-[0.2em] uppercase text-xs md:text-sm"
            >
              {authorText.substring(0, textIndex - quoteText.length)}
            </motion.p>
          )}
        </motion.div>
      )}

      {/* Phase 2: Logo Morph */}
      {(phase === "morph" || phase === "iris") && (
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20"
          >
            <SRLogo className="w-24 h-24 md:w-32 md:h-32 opacity-90" />
            <motion.div 
              className="absolute inset-0 bg-cyan-400 blur-[40px] mix-blend-screen rounded-full"
              animate={{ opacity: phase === "iris" ? 0 : 0.3 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
