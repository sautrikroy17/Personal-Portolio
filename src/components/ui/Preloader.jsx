import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import SRLogo from "./SRLogo";

// The intro speech text
const SPEECH_TEXT =
  "Hey, I'm Sautrik Roy. C.S.E undergrad and Full Stack Developer. Here's my world.";

// Words shown progressively below the genmoji
const WORDS = [
  "Hey,", "I'm", "Sautrik", "Roy.", "—",
  "CSE", "undergrad", "&", "Full", "Stack", "Dev."
];

export default function Preloader({ onComplete }) {
  // phase: logo → reveal → speaking → done
  const [phase, setPhase] = useState("logo");
  const [wordIndex, setWordIndex] = useState(-1);
  const [mouthOpen, setMouthOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const wordRef = useRef(null);
  const mouthRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Logo displays → after 1.4s → reveal genmoji and button
    const t = setTimeout(() => setPhase("reveal"), 1400);
    return () => {
      clearTimeout(t);
      clearInterval(wordRef.current);
      clearInterval(mouthRef.current);
      try { speechSynthesis.cancel(); } catch (e) {}
      document.body.style.overflow = "unset";
    };
  }, []);

  const finishIntro = useCallback(() => {
    clearInterval(wordRef.current);
    clearInterval(mouthRef.current);
    setMouthOpen(false);
    setIsSpeaking(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 950);
  }, []);

  const handleEnter = useCallback(() => {
    if (phase !== "reveal" && phase !== "speaking") return;
    if (isSpeaking) {
      // Already speaking — clicking again = finish immediately
      finishIntro();
      return;
    }

    setPhase("speaking");
    setIsSpeaking(true);
    setWordIndex(0);

    // Animate mouth open/close
    mouthRef.current = setInterval(() => {
      setMouthOpen(v => !v);
    }, 160);

    // Reveal words one by one
    let idx = 0;
    wordRef.current = setInterval(() => {
      idx++;
      setWordIndex(idx);
      if (idx >= WORDS.length) clearInterval(wordRef.current);
    }, 300);

    // Speech synthesis
    const doSpeak = () => {
      try { speechSynthesis.cancel(); } catch (e) {}
      const utter = new SpeechSynthesisUtterance(SPEECH_TEXT);
      utter.rate = 1.05;
      utter.pitch = 1.1;
      utter.volume = 1;

      const voices = speechSynthesis.getVoices();
      const preferred =
        voices.find(v => v.name === "Aaron") ||
        voices.find(v => v.name === "Daniel") ||
        voices.find(v => v.name.includes("Google UK English Male")) ||
        voices.find(v => v.lang.startsWith("en-") && !v.name.includes("Female")) ||
        voices.find(v => v.lang.startsWith("en"));
      if (preferred) utter.voice = preferred;

      utter.onend = finishIntro;
      utter.onerror = () => setTimeout(finishIntro, 500);
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

    // Safety exit
    setTimeout(finishIntro, WORDS.length * 300 + 4000);
  }, [phase, isSpeaking, finishIntro]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      animate={{
        clipPath: phase === "exit"
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(34,211,238,0.1) 0%, transparent 70%)",
        }}
      />

      {/* ── PHASE: LOGO ── */}
      <AnimatePresence>
        {phase === "logo" && (
          <motion.div
            key="logo-phase"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <SRLogo className="w-24 h-24" />
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE: REVEAL (Genmoji + Enter button) ── */}
      <AnimatePresence>
        {(phase === "reveal" || phase === "speaking") && (
          <motion.div
            key="genmoji-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* SR Logo — small, top */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <SRLogo className="w-12 h-12" />
            </motion.div>

            {/* Genmoji avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Floating animation while speaking */}
              <motion.div
                animate={isSpeaking ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ width: 200, height: 200 }}
              >
                <img
                  src="/memoji-v2.png"
                  alt="Sautrik Roy"
                  draggable={false}
                  className="w-full h-full object-contain select-none"
                  style={{
                    filter: "drop-shadow(0 20px 50px rgba(34,211,238,0.35))",
                    // Remove white background from the image
                    mixBlendMode: "screen",
                  }}
                />

                {/* Animated mouth overlay */}
                {isSpeaking && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "29%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: mouthOpen ? 22 : 18,
                      height: mouthOpen ? 13 : 5,
                      background: "rgba(10, 3, 0, 0.92)",
                      borderRadius: mouthOpen ? "6px 6px 50% 50%" : "50%",
                      transition: "all 0.12s ease",
                    }}
                  />
                )}
              </motion.div>
            </motion.div>

            {/* Audio visualizer while speaking */}
            <AnimatePresence>
              {isSpeaking && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  className="mt-4 flex gap-[4px] items-end justify-center"
                  style={{ height: 30 }}
                >
                  {[0.5, 0.9, 0.6, 1.2, 0.4, 1.0, 0.7, 1.3, 0.5, 0.8, 0.6, 1.1].map((f, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [5, Math.round(24 * f), 5] }}
                      transition={{
                        duration: 0.25 + i * 0.03,
                        repeat: Infinity,
                        delay: i * 0.055,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{
                        width: 3,
                        minHeight: 4,
                        borderRadius: 99,
                        background: `hsl(${186 + i * 5}, 78%, ${52 + i * 2}%)`,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Intro words */}
            <div
              className="mt-5 flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 max-w-[300px] text-center"
              style={{ minHeight: 32 }}
            >
              {WORDS.map((word, i) =>
                word === "—" ? (
                  <span key={i} className="w-full" />
                ) : (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={
                      wordIndex > i
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 8, filter: "blur(4px)" }
                    }
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-base font-medium ${
                      i >= 5 ? "text-cyan-400/80" : "text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                )
              )}
            </div>

            {/* ── ENTER BUTTON ── */}
            <AnimatePresence>
              {phase === "reveal" && !isSpeaking && (
                <motion.button
                  key="enter-btn"
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleEnter}
                  className="mt-8 group relative flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm font-semibold tracking-wide hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Enter My World
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              )}

              {/* Skip button while speaking */}
              {isSpeaking && (
                <motion.button
                  key="skip-btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1 }}
                  onClick={finishIntro}
                  className="mt-6 text-xs text-zinc-600 hover:text-zinc-400 tracking-widest uppercase transition-colors cursor-pointer"
                >
                  Skip →
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
