import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("loading"); // loading -> exiting

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Auto-complete the loader after a very short duration (snappy!)
    const timer = setTimeout(() => {
      setPhase("exiting");
      setTimeout(() => {
        document.body.style.overflow = "unset";
        onComplete();
      }, 350); // fast exit animation
    }, 900); // Only shows for ~900ms total before transition

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="minimal-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] select-none"
        >
          <div className="flex flex-col items-center justify-center overflow-hidden w-full px-6">
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                SAUTRIK ROY
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <p
                  style={{
                    marginTop: "1.2rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#a1a1aa",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Full Stack Developer &nbsp;·&nbsp; CS Undergrad
                </p>
              </motion.div>
            </motion.div>
            
            {/* Loading Bar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{
                marginTop: "3rem",
                width: "160px",
                height: "2px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "1px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* The loading progress sweep */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#ffffff",
                  borderRadius: "1px",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
