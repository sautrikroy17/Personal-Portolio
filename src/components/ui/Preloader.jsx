import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// Short, punchy speech — less text = less chance of cutoff
const SPEECH = "Hey. I'm Sautrik Roy. Full Stack Developer. Welcome to my world.";

export default function Preloader({ onComplete }) {
  // Phases: line → name → tagline → button → speaking → exit
  const [phase, setPhase] = useState("line");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [colorFlood, setColorFlood] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const keepAliveRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Staggered reveal sequence
    const t1 = setTimeout(() => setPhase("name"),    500);
    const t2 = setTimeout(() => setPhase("tagline"), 1300);
    const t3 = setTimeout(() => setPhase("button"),  2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(keepAliveRef.current);
      document.body.style.overflow = "unset";
      try { speechSynthesis.cancel(); } catch (e) {}
    };
  }, []);

  const finishIntro = useCallback(() => {
    clearInterval(keepAliveRef.current);
    setIsSpeaking(false);
    setColorFlood(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 950);
  }, []);

  const handleEnter = useCallback(() => {
    if (phase !== "button") return;
    setPhase("speaking");
    setIsSpeaking(true);
    setColorFlood(true);

    // ---------- ROBUST SPEECH SYNTHESIS ----------
    const doSpeak = () => {
      try { speechSynthesis.cancel(); } catch (e) {}

      setTimeout(() => {
        const utter = new SpeechSynthesisUtterance(SPEECH);
        utter.rate  = 0.92;   // slightly slow = clearer, less cutoff risk
        utter.pitch = 1.08;
        utter.volume = 1;

        // Voice selection: prefer young male English voices
        const voices = speechSynthesis.getVoices();
        const pick =
          voices.find(v => v.name === "Aaron") ||
          voices.find(v => v.name === "Daniel") ||
          voices.find(v => v.name === "Google UK English Male") ||
          voices.find(v => v.name === "Google US English") ||
          voices.find(v => v.lang.startsWith("en") && !v.name.toLowerCase().includes("female") && !v.name.toLowerCase().includes("zira") && !v.name.toLowerCase().includes("victoria")) ||
          voices.find(v => v.lang.startsWith("en"));
        if (pick) utter.voice = pick;

        // Chrome bug fix: speech cuts out after ~15s if page is idle.
        // Pause + resume every 8s keeps it alive. Our text is ~4s but this is a safety net.
        utter.onstart = () => {
          keepAliveRef.current = setInterval(() => {
            if (speechSynthesis.speaking) {
              speechSynthesis.pause();
              speechSynthesis.resume();
            } else {
              clearInterval(keepAliveRef.current);
            }
          }, 8000);
        };

        utter.onend   = finishIntro;
        utter.onerror = () => setTimeout(finishIntro, 400);

        speechSynthesis.speak(utter);

        // Safety exit — fires if onend never triggers (some browsers don't fire it)
        setTimeout(finishIntro, 10000);
      }, 120); // tiny delay after cancel to avoid race condition
    };

    // Chrome: voices load asynchronously on first call
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      doSpeak();
    } else {
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.onvoiceschanged = null;
        doSpeak();
      };
      // Fallback if onvoiceschanged never fires (Safari / Firefox)
      setTimeout(doSpeak, 600);
    }
  }, [phase, finishIntro]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden select-none"
      animate={{
        clipPath: phase === "exit"
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      {/* ── AURORA BACKGROUND BLOBS (CSS only, always present) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb"
          style={{
            position: "absolute",
            width: 700, height: 700,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
            animation: "orbFloat1 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── COLOR FLOOD on Enter ── */}
      <AnimatePresence>
        {colorFlood && (
          <motion.div
            key="flood"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 2.5, times: [0, 0.15, 1], ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(6,182,212,0.5) 0%, rgba(37,99,235,0.3) 40%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-8">

        {/* The horizontal line — animates in first */}
        <AnimatePresence>
          {phase !== "line" && (
            <motion.div
              key="line"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="origin-center"
              style={{
                width: "min(500px, 80vw)",
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.2) 70%, transparent)",
                marginBottom: 0,
              }}
            />
          )}
        </AnimatePresence>

        {/* The name — slides UP from behind the line */}
        <div
          style={{
            overflow: "hidden",
            paddingTop: 6,
            paddingBottom: 4,
          }}
        >
          <AnimatePresence>
            {(phase === "name" || phase === "tagline" || phase === "button" || phase === "speaking") && (
              <motion.h1
                key="name"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                className="text-white font-black text-center"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  // Subtle gradient shimmer on the name
                  background: "linear-gradient(135deg, #ffffff 0%, #d4d4d8 60%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SAUTRIK ROY
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom line */}
        <AnimatePresence>
          {phase !== "line" && (
            <motion.div
              key="line-bottom"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="origin-center"
              style={{
                width: "min(500px, 80vw)",
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.2) 70%, transparent)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Tagline — letter-spacing expands in */}
        <AnimatePresence>
          {(phase === "tagline" || phase === "button" || phase === "speaking") && (
            <motion.p
              key="tagline"
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-xs font-medium uppercase text-cyan-400/70"
            >
              Full Stack Developer &nbsp;·&nbsp; CSE Undergrad
            </motion.p>
          )}
        </AnimatePresence>

        {/* Audio visualizer — speaking only */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              key="viz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 flex gap-[4px] items-end justify-center"
              style={{ height: 32 }}
            >
              {[0.4, 0.8, 0.5, 1.1, 0.35, 1.0, 0.65, 1.2, 0.45, 0.75, 0.55, 0.95].map((f, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [4, Math.round(26 * f), 4] }}
                  transition={{
                    duration: 0.2 + i * 0.025,
                    repeat: Infinity,
                    delay: i * 0.05,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 3,
                    minHeight: 4,
                    borderRadius: 99,
                    background: `hsl(${188 + i * 4}, 78%, ${52 + i * 2}%)`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enter button */}
        <AnimatePresence>
          {phase === "button" && (
            <motion.button
              key="enter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleEnter}
              className="group mt-10 relative flex items-center gap-3 px-10 py-4 rounded-full text-white text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 0 40px rgba(6,182,212,0.08)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 60px rgba(6,182,212,0.3)",
                borderColor: "rgba(6,182,212,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer sweep on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                }}
              />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="relative">Enter My World</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Skip while speaking */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.button
              key="skip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5 }}
              onClick={finishIntro}
              className="mt-8 text-[10px] text-zinc-600 hover:text-zinc-400 tracking-[0.35em] uppercase transition-colors cursor-pointer"
            >
              Skip
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
