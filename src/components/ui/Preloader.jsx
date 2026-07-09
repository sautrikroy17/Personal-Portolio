import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// ─── VOICE: Chunked speech — Chrome can't cut off a 2-second clip ───────────
// Each part fires its own onend, chained sequentially. 100% reliable.
const SPEECH_CHUNKS = [
  "Hey.",
  "I'm Sautrik Roy.",
  "Full Stack Developer.",
  "Welcome to my world.",
];

function speakChunked(chunks, voiceRef, onComplete) {
  let index = 0;
  let abandoned = false;

  function next() {
    if (abandoned || index >= chunks.length) {
      if (!abandoned) onComplete();
      return;
    }

    const u = new SpeechSynthesisUtterance(chunks[index]);
    u.rate   = 0.93;
    u.pitch  = 1.1;
    u.volume = 1;
    if (voiceRef.current) u.voice = voiceRef.current;

    u.onend   = () => { index++; setTimeout(next, 40); };
    u.onerror = () => { index++; setTimeout(next, 40); };

    speechSynthesis.speak(u);
  }

  // Hard bail-out: if somehow nothing fires, exit cleanly after 12s
  const bail = setTimeout(() => { abandoned = true; onComplete(); }, 12000);

  // Attach cleanup to onComplete
  const originalComplete = onComplete;
  onComplete = () => { clearTimeout(bail); originalComplete(); };

  next();
  return () => { abandoned = true; clearTimeout(bail); };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("init"); // init → name → ready → speaking → exit
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [scanOpacity, setScanOpacity] = useState(1);
  const voiceRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const stopSpeechRef = useRef(null);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // Load voice in background immediately
  useEffect(() => {
    const loadVoice = () => {
      const voices = speechSynthesis.getVoices();
      voiceRef.current =
        voices.find(v => v.name === "Aaron") ||
        voices.find(v => v.name === "Daniel") ||
        voices.find(v => v.name === "Google UK English Male") ||
        voices.find(v => v.name === "Google US English") ||
        voices.find(v => v.lang.startsWith("en") && !v.name.toLowerCase().includes("female") && !v.name.toLowerCase().includes("zira")) ||
        voices.find(v => v.lang.startsWith("en")) ||
        null;
    };

    loadVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoice;
    }
  }, []);

  // Reveal sequence
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("name"),  400);
    const t2 = setTimeout(() => setPhase("ready"), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "unset";
      try { speechSynthesis.cancel(); } catch (e) {}
      stopSpeechRef.current?.();
    };
  }, []);

  const finishIntro = useCallback(() => {
    stopSpeechRef.current?.();
    setIsSpeaking(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 980);
  }, []);

  const handleEnter = useCallback(() => {
    if (phase !== "ready") return;
    setPhase("speaking");
    setIsSpeaking(true);

    // Cancel any leftover speech, wait 150ms, then speak
    try { speechSynthesis.cancel(); } catch (e) {}
    setTimeout(() => {
      stopSpeechRef.current = speakChunked(SPEECH_CHUNKS, voiceRef, finishIntro);
    }, 150);
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

      {/* ── SCANLINE NOISE ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
          zIndex: 0,
        }}
      />

      {/* ── AMBIENT GLOW ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          width: 800, height: 600,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, rgba(37,99,235,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── AURORA BURST on Enter ── */}
      <AnimatePresence>
        {isSpeaking && (
          <motion.div
            key="aurora"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2.0, times: [0, 0.1, 1], ease: "easeOut" }}
            style={{
              background: "radial-gradient(ellipse at center, rgba(6,182,212,0.45) 0%, rgba(37,99,235,0.2) 40%, transparent 65%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center w-full text-center px-6">

        {/* Top line */}
        <AnimatePresence>
          {phase !== "init" && (
            <motion.div
              key="line-top"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              style={{
                width: "min(560px, 85vw)", height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 25%, rgba(6,182,212,0.4) 50%, rgba(255,255,255,0.18) 75%, transparent)",
                transformOrigin: "center",
                marginBottom: 8,
              }}
            />
          )}
        </AnimatePresence>

        {/* Name — clip-path slide from below the line */}
        <div style={{ overflow: "hidden", paddingBottom: 8 }}>
          <AnimatePresence>
            {phase !== "init" && (
              <motion.h1
                key="name"
                initial={{ y: "105%", filter: "blur(4px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  background: "linear-gradient(160deg, #ffffff 0%, #a1a1aa 70%, #ffffff 100%)",
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
          {phase !== "init" && (
            <motion.div
              key="line-bottom"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
              style={{
                width: "min(560px, 85vw)", height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 25%, rgba(6,182,212,0.4) 50%, rgba(255,255,255,0.18) 75%, transparent)",
                transformOrigin: "center",
                marginTop: 8,
              }}
            />
          )}
        </AnimatePresence>

        {/* Tagline — letter-spacing expansion */}
        <AnimatePresence>
          {(phase === "ready" || phase === "speaking") && (
            <motion.p
              key="tagline"
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: 20,
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "rgba(6,182,212,0.75)",
              }}
            >
              Full Stack Developer &nbsp;·&nbsp; CSE Undergrad
            </motion.p>
          )}
        </AnimatePresence>

        {/* Audio bars — while speaking */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              key="bars"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex gap-[4px] items-end justify-center"
              style={{ marginTop: 24, height: 30 }}
            >
              {[0.4, 0.85, 0.55, 1.15, 0.35, 1.05, 0.6, 1.2, 0.45, 0.8, 0.5, 0.9].map((f, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [4, Math.round(26 * f), 4] }}
                  transition={{
                    duration: 0.2 + i * 0.02,
                    repeat: Infinity,
                    delay: i * 0.05,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 3, minHeight: 4, borderRadius: 99,
                    background: `hsl(${188 + i * 4}, 78%, ${50 + i * 2}%)`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ENTER BUTTON ── */}
        <AnimatePresence>
          {phase === "ready" && (
            <motion.button
              key="enter-btn"
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.94, filter: "blur(6px)" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleEnter}
              style={{
                marginTop: 36,
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 36px",
                borderRadius: 999,
                background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(16px)",
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 0 40px rgba(6,182,212,0.08)",
                overflow: "hidden",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 70px rgba(6,182,212,0.35)",
                borderColor: "rgba(6,182,212,0.55)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Shimmer on hover */}
              <motion.div
                style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                  x: "-100%",
                }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.65 }}
              />
              {/* Ping dot */}
              <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
                <span style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "#22d3ee", opacity: 0.6,
                  animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite",
                }} />
                <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#22d3ee" }} />
              </span>
              Enter My World
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginLeft: 2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          )}

          {/* Skip while speaking */}
          {isSpeaking && (
            <motion.button
              key="skip-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2 }}
              onClick={finishIntro}
              style={{
                marginTop: 28,
                background: "none", border: "none",
                color: "#52525b",
                fontSize: "0.65rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Skip
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── PING KEYFRAME via style tag ── */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}
