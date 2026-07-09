import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function InteractiveGrid() {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const el = containerRef.current;
    let rafId = null;
    let currentX = -1000;
    let currentY = -1000;

    const onMove = (e) => {
      // Throttle via RAF — runs at most once per frame (16ms) instead of every event
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        currentX = e.clientX;
        currentY = e.clientY;
        el.style.setProperty("--mx", `${currentX}px`);
        el.style.setProperty("--my", `${currentY}px`);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      style={{ "--mx": "-1000px", "--my": "-1000px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.35) 1px, transparent 0)",
          WebkitMaskImage:
            "radial-gradient(450px circle at var(--mx) var(--my), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(450px circle at var(--mx) var(--my), black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
