import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("loading"); // loading -> exiting

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Auto-complete the loader after a short, elegant duration
    const timer = setTimeout(() => {
      setPhase("exiting");
      setTimeout(() => {
        document.body.style.overflow = "unset";
        onComplete();
      }, 1000); // 1s exit animation
    }, 2200);

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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] select-none"
        >
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
                initial={{ opacity: 0, letterSpacing: "0em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: "#a1a1aa",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Portfolio
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: "3rem",
                width: "40px",
                height: "2px",
                background: "#ffffff",
                transformOrigin: "center",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
