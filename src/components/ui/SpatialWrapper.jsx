import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useSpatial } from "../../context/SpatialContext";

export default function SpatialWrapper({ children }) {
  const { isSpatialMode } = useSpatial();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
        window.innerWidth <= 900
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isSpatialMode || isMobile) {
      mouseX.set(0.5);
      mouseY.set(0.5);
      return;
    }
    let rafId = null;
    const onMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX / window.innerWidth);
        mouseY.set(e.clientY / window.innerHeight);
        rafId = null;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isSpatialMode, isMobile, mouseX, mouseY]);

  const spring = { damping: 60, stiffness: 200, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), spring);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), spring);
  const scale = useSpring(!isMobile && isSpatialMode ? 0.98 : 1, spring);

  const active = !isMobile && isSpatialMode;

  return (
    <div
      style={{ perspective: active ? "2000px" : "none" }}
      className="w-full"
    >
      <motion.div
        style={{
          rotateX: active ? rotateX : 0,
          rotateY: active ? rotateY : 0,
          scale,
          // CRITICAL: NO overflow:hidden, NO preserve-3d, NO rounded corners
          // Those were breaking every section into a clipped box
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
