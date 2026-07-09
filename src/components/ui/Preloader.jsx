import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const INTRO_WORDS = ["Hey,", "I'm", "Sautrik", "Roy.", "CSE", "undergrad", "&", "Full", "Stack", "Dev."];

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("tap"); // tap -> speaking -> exit
  const [wordIndex, setWordIndex] = useState(-1);
  const [mouthOpen, setMouthOpen] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const wordIntervalRef = useRef(null);
  const mouthIntervalRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      clearInterval(wordIntervalRef.current);
      clearInterval(mouthIntervalRef.current);
      try { speechSynthesis.cancel(); } catch (e) {}
    };
  }, []);

  const finishIntro = useCallback(() => {
    clearInterval(wordIntervalRef.current);
    clearInterval(mouthIntervalRef.current);
    setMouthOpen(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 900);
  }, []);

  const startSpeaking = useCallback(() => {
    if (phase !== "tap") return;
    setPhase("speaking");

    // Start mouth animation
    mouthIntervalRef.current = setInterval(() => {
      setMouthOpen((v) => !v);
    }, 180);

    // Reveal words progressively
    let idx = 0;
    setWordIndex(0);
    wordIntervalRef.current = setInterval(() => {
      idx += 1;
      setWordIndex(idx);
      if (idx >= INTRO_WORDS.length) clearInterval(wordIntervalRef.current);
    }, 290);

    // Speech synthesis — Chrome requires this to be called inside a user gesture handler
    const speak = () => {
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(
        "Hey, I'm Sautrik Roy. CSE undergrad and Full Stack Developer. Here's my world."
      );
      // Target: young male voice, natural pace
      utter.rate = 1.05;
      utter.pitch = 1.1;  // slightly higher = younger sound
      utter.volume = 1;

      const voices = speechSynthesis.getVoices();
      const pick =
        voices.find((v) => v.name === "Aaron") ||
        voices.find((v) => v.name === "Daniel") ||
        voices.find((v) => v.name === "Google UK English Male") ||
        voices.find((v) => v.name.toLowerCase().includes("male") && v.lang.startsWith("en")) ||
        voices.find((v) => v.lang.startsWith("en"));
      if (pick) utter.voice = pick;

      utter.onend = finishIntro;
      utter.onerror = () => setTimeout(finishIntro, 800);
      speechSynthesis.speak(utter);
    };

    if (speechSynthesis.getVoices().length > 0) {
      speak();
    } else {
      speechSynthesis.onvoiceschanged = () => {
        speak();
        speechSynthesis.onvoiceschanged = null;
      };
      // Fallback if onvoiceschanged never fires (some browsers)
      setTimeout(() => {
        if (phase === "speaking" && !speechSynthesis.speaking) speak();
      }, 500);
    }

    // Hard timeout — always exits even if speech fails
    setTimeout(finishIntro, INTRO_WORDS.length * 290 + 2500);
  }, [phase, finishIntro]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center cursor-pointer select-none"
      animate={{
        clipPath:
          phase === "exit"
            ? "circle(0% at 50% 50%)"
            : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{ clipPath: "circle(150% at 50% 50%)" }}
      onClick={phase === "tap" ? startSpeaking : undefined}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 65%)",
          filter: "blur(40px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
        }}
      />

      {/* Genmoji + content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: phase === "speaking" ? [0, -8, 0] : 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{ width: 220, height: 220 }}
          >
            {/* Image — mix-blend-mode:multiply removes white background */}
            <img
              src="/memoji-v2.png"
              alt="Sautrik"
              draggable={false}
              className="w-full h-full object-contain select-none"
              style={{
                mixBlendMode: "multiply",
                filter:
                  "drop-shadow(0 16px 40px rgba(34,211,238,0.3)) invert(0)",
              }}
            />

            {/* Animated mouth overlay — positioned over mouth area */}
            <AnimatePresence>
              {phase === "speaking" && (
                <motion.div
                  className="absolute"
                  style={{
                    // These %s target the mouth on the face-forward genmoji
                    bottom: "32%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 26,
                    borderRadius: mouthOpen ? "0 0 50% 50%" : "50%",
                    height: mouthOpen ? 14 : 5,
                    background: "rgba(15, 5, 0, 0.9)",
                    transition: "height 0.15s ease, border-radius 0.15s ease",
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Audio visualizer — only while speaking */}
        <AnimatePresence>
          {phase === "speaking" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex gap-[4px] items-end justify-center"
              style={{ height: 28 }}
            >
              {[0.5, 0.9, 0.6, 1.2, 0.4, 1.0, 0.7, 1.3, 0.5, 0.8].map(
                (factor, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [5, 22 * factor, 5] }}
                    transition={{
                      duration: 0.28 + i * 0.035,
                      repeat: Infinity,
                      delay: i * 0.06,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    style={{
                      width: 3,
                      minHeight: 4,
                      borderRadius: 99,
                      background: `hsl(${188 + i * 4}, 80%, ${55 + i * 2}%)`,
                    }}
                  />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Word-by-word intro text */}
        <div
          className="mt-7 flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 max-w-[280px] text-center"
          style={{ minHeight: 32 }}
        >
          {INTRO_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={
                wordIndex > i
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 10, filter: "blur(4px)" }
              }
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-medium text-lg"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tap hint — only on initial state */}
        <AnimatePresence>
          {phase === "tap" && (
            <motion.p
              key="tap-hint"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0.4, 0.9, 0.4], y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 0.4 },
              }}
              className="mt-10 text-zinc-500 text-sm tracking-widest uppercase"
            >
              Tap anywhere to enter
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
