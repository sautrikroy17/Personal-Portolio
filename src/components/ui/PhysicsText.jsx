import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function PhysicsText({ text, className = "" }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const letters = Array.from(text);

  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 0.8,
      },
    };
  };

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => {
        if (letter === " ") return <span key={index}>&nbsp;</span>;
        
        return (
          <motion.span
            key={index}
            className="inline-block cursor-default"
            whileHover={!isMobile ? rubberBand() : {}}
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
}
