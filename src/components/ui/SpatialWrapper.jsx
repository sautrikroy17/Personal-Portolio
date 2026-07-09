import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useSpatial } from "../../context/SpatialContext";

export default function SpatialWrapper({ children }) {
  const { isSpatialMode } = useSpatial();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Detect touch / mobile — 3D is desktop-only
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

  // Gentle tilt — reduced from ±10 to ±6 to avoid content clipping navbar
  const spring = { damping: 50, stiffness: 180, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), spring);
  const scale = useSpring(!isMobile && isSpatialMode ? 0.97 : 1, spring);

  const active = !isMobile && isSpatialMode;

  return (
    /*
     * KEY FIX: perspective lives on THIS div (the outer container),
     * NOT on the animated child. The animated child uses plain 2D rotateX/Y
     * with NO preserve-3d. This prevents z-fighting with the fixed navbar
     * while still giving the full holographic tilt effect.
     */
    <div
      style={{ perspective: active ? "1800px" : "none" }}
      className="w-full flex-1"
    >
      <motion.div
        style={{
          rotateX: active ? rotateX : 0,
          rotateY: active ? rotateY : 0,
          scale,
          // NO preserve-3d — this stops z-fighting with the fixed navbar
        }}
        className={
          active
            ? "w-full h-full origin-center will-change-transform ring-1 ring-white/[0.06] rounded-[32px] overflow-hidden shadow-[0_32px_80px_-20px_rgba(34,211,238,0.12)]"
            : "w-full h-full origin-center"
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
