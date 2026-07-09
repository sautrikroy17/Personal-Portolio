import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollProgressRing() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth out the scroll progress for the SVG ring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the stroke dashoffset based on progress
  // Circumference of a circle with r=20 is 2 * Math.PI * 20 ~= 125.6
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [125.6, 0]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Show button after scrolling down a bit (e.g., 5% of page)
      setIsVisible(latest > 0.05);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? "auto" : "none"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white shadow-xl hover:bg-zinc-800 transition-colors group focus:outline-none focus:ring-2 focus:ring-cyan-500"
      aria-label="Scroll to top"
    >
      {/* SVG Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ strokeDasharray: 150.7, strokeDashoffset: useTransform(smoothProgress, [0, 1], [150.7, 0]) }}
          className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
        />
      </svg>
      
      {/* Arrow Icon */}
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}
