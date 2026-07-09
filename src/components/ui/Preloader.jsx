import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import SRLogo from "./SRLogo";

const SPEECH_TEXT =
  "Hey, I'm Sautrik Roy. CSE undergrad and Full Stack Developer. Here's my world.";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);         // 0 → 100 counter
  const [phase, setPhase] = useState("count");   // count → reveal → speaking → exit
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const mouthRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // ── COUNTING PHASE ──────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = "hidden";

    let start = null;
    const duration = 2200; // ms to reach 100

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out: fast then slow
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(eased * 100);
      setCount(currentCount);
      setLineWidth(eased * 100);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Counter done → brief pause → reveal phase
        setTimeout(() => setPhase("reveal"), 400);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "unset";
      try { speechSynthesis.cancel(); } catch (e) {}
    };
  }, []);

  // ── FINISH ──────────────────────────────────────────────────────────────────
  const finishIntro = useCallback(() => {
    clearInterval(mouthRef.current);
    setIsSpeaking(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 950);
  }, []);

  // ── ENTER BUTTON CLICK ──────────────────────────────────────────────────────
  const handleEnter = useCallback(() => {
    if (phase !== "reveal") return;
    setPhase("speaking");
    setIsSpeaking(true);

    const doSpeak = () => {
      try { speechSynthesis.cancel(); } catch (e) {}
      const utter = new SpeechSynthesisUtterance(SPEECH_TEXT);
      utter.rate = 1.05;
      utter.pitch = 1.1;
      utter.volume = 1;

      const voices = speechSynthesis.getVoices();
      const pick =
        voices.find(v => v.name === "Aaron") ||
        voices.find(v => v.name === "Daniel") ||
        voices.find(v => v.name.includes("Google UK English Male")) ||
        voices.find(v => v.lang.startsWith("en-") && !v.name.toLowerCase().includes("female")) ||
        voices.find(v => v.lang.startsWith("en"));
      if (pick) utter.voice = pick;

      utter.onend = finishIntro;
      utter.onerror = () => setTimeout(finishIntro, 300);
      speechSynthesis.speak(utter);
    };

    if (speechSynthesis.getVoices().length) {
      doSpeak();
    } else {
      speechSynthesis.onvoiceschanged = () => {
        doSpeak();
        speechSynthesis.onvoiceschanged = null;
      };
      setTimeout(doSpeak, 400);
    }

    // Safety exit in case speech never fires
    setTimeout(finishIntro, 9000);
  }, [phase, finishIntro]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden select-none"
      animate={{
        clipPath: phase === "exit"
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── COUNTING PHASE ── */}
      <AnimatePresence>
        {phase === "count" && (
          <motion.div
            key="count-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* Big counter */}
            <div
              className="font-display font-black text-white"
              style={{
                fontSize: "clamp(5rem, 20vw, 14rem)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600">
                {String(count).padStart(2, "0")}
              </span>
            </div>

            {/* Progress line */}
            <div className="mt-8 w-[200px] h-px bg-zinc-800 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${lineWidth}%` }}
              />
            </div>

            <p className="mt-4 text-zinc-600 text-xs tracking-[0.3em] uppercase font-medium">
              Initializing
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── REVEAL PHASE — SR Logo + name + enter button ── */}
      <AnimatePresence>
        {(phase === "reveal" || phase === "speaking") && (
          <motion.div
            key="reveal-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center px-8"
          >
            {/* SR Logo draws in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SRLogo className="w-20 h-20" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display font-black tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Sautrik Roy
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-sm tracking-[0.25em] uppercase text-cyan-400/80 font-medium"
            >
              CSE Undergrad &nbsp;·&nbsp; Full Stack Developer
            </motion.p>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent origin-center"
            />

            {/* Audio visualizer (speaking only) */}
            <AnimatePresence>
              {isSpeaking && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  className="mt-6 flex gap-[4px] items-end justify-center"
                  style={{ height: 32 }}
                >
                  {[0.4, 0.8, 0.55, 1.1, 0.35, 0.95, 0.65, 1.25, 0.45, 0.75, 0.5, 1.0].map((f, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [5, Math.round(26 * f), 5] }}
                      transition={{
                        duration: 0.22 + i * 0.025,
                        repeat: Infinity,
                        delay: i * 0.05,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{
                        width: 3,
                        minHeight: 4,
                        borderRadius: 99,
                        background: `hsl(${186 + i * 4}, 75%, ${52 + i * 2}%)`,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Speaking label */}
            <AnimatePresence>
              {isSpeaking && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-xs text-zinc-500 tracking-[0.3em] uppercase"
                >
                  Introducing...
                </motion.p>
              )}
            </AnimatePresence>

            {/* Enter button */}
            <AnimatePresence>
              {phase === "reveal" && (
                <motion.button
                  key="enter-btn"
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleEnter}
                  className="group mt-10 relative flex items-center gap-3 px-9 py-4 rounded-full text-white text-sm font-semibold tracking-wide cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 0 40px rgba(34,211,238,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 60px rgba(34,211,238,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                    borderColor: "rgba(34,211,238,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Animated glow dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  Enter My World
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              )}

              {/* Skip while speaking */}
              {phase === "speaking" && (
                <motion.button
                  key="skip-btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.5 }}
                  onClick={finishIntro}
                  className="mt-8 text-xs text-zinc-600 hover:text-zinc-400 tracking-[0.25em] uppercase transition-colors cursor-pointer"
                >
                  Skip
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
