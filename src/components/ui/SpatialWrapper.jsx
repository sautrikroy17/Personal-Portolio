import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useSpatial } from "../../context/SpatialContext";
import { cn } from "../../lib/utils";

export default function SpatialWrapper({ children }) {
  const { isSpatialMode } = useSpatial();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    if (!isSpatialMode) {
      mouseX.set(0.5);
      mouseY.set(0.5);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isSpatialMode, mouseX, mouseY]);

  // Spring animations for smooth tilt
  const springConfig = { damping: 40, stiffness: 150, mass: 1 };
  
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-10, 10]),
    springConfig
  );
  const scale = useSpring(isSpatialMode ? 0.95 : 1, springConfig);

  // When not in spatial mode, force 0 rotation
  const smoothRotateX = useTransform(() => isSpatialMode ? rotateX.get() : 0);
  const smoothRotateY = useTransform(() => isSpatialMode ? rotateY.get() : 0);

  return (
    <motion.div
      style={{
        perspective: isSpatialMode ? "2000px" : "none",
        transformStyle: "preserve-3d",
      }}
      className="w-full flex-1"
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "w-full h-full origin-center transition-all duration-700",
          isSpatialMode ? "shadow-[0_0_150px_rgba(34,211,238,0.15)] ring-1 ring-white/10 rounded-[40px] overflow-hidden" : ""
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
