import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function CustomCursor() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    // Add global class to hide default cursor
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive = 
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("cursor-pointer") ||
        e.target.closest(".cursor-pointer");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0, ease: "linear" }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-[9999] backdrop-invert-[0.1]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.15)" : "rgba(34, 211, 238, 0)",
          borderColor: isHovering ? "rgba(34, 211, 238, 0)" : "rgba(34, 211, 238, 0.5)",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15,
          mass: 0.2
        }}
      />
    </>
  );
}
