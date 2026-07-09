import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiquidRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't trigger if clicking inside a button, link, or interactive element
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.closest("input") ||
        e.target.closest("textarea")
      ) {
        return;
      }

      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              scale: 0, 
              opacity: 0.8, 
              borderWidth: "1px",
              boxShadow: "0 0 0 rgba(34, 211, 238, 0)"
            }}
            animate={{ 
              scale: 3, 
              opacity: 0,
              borderWidth: "0px",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)"
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute rounded-full border-cyan-400"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
