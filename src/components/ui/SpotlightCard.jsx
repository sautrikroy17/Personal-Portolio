import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SpotlightCard({ children, className = "", spotLightColor = "rgba(255, 255, 255, 0.1)" }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 3D Tilt Physics
  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused || isMobile) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPosition({ x: mouseX, y: mouseY });

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Removed rotateX, rotateY, and preserve-3d for performance
      }}
      className={`relative overflow-hidden ${className} perspective-1000`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 mix-blend-overlay"
        style={{
          opacity: isMobile ? 0 : opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotLightColor}, transparent 40%)`,
        }}
      />
      <div style={{ transform: "none" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
