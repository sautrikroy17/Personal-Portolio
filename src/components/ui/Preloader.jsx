import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// ─── SPEECH: Chunked so Chrome can't cut it ───────────────────────────────────
const SPEECH_CHUNKS = [
  "Hey.",
  "I'm Sautrik Roy.",
  "Full Stack Developer.",
  "Welcome to my world.",
];

function speakChunked(chunks, voiceRef, onComplete) {
  let idx = 0, stopped = false;
  const stop = () => { stopped = true; try { speechSynthesis.cancel(); } catch (e) {} };
  const next = () => {
    if (stopped) return;
    if (idx >= chunks.length) { onComplete(); return; }
    const u = new SpeechSynthesisUtterance(chunks[idx]);
    u.rate = 0.92; u.pitch = 1.1; u.volume = 1;
    if (voiceRef.current) u.voice = voiceRef.current;
    u.onend   = () => { if (!stopped) { idx++; setTimeout(next, 60); } };
    u.onerror = () => { if (!stopped) { idx++; setTimeout(next, 60); } };
    speechSynthesis.speak(u);
  };
  next();
  const bail = setTimeout(() => { if (!stopped) { stop(); onComplete(); } }, 14000);
  return () => { stopped = true; clearTimeout(bail); try { speechSynthesis.cancel(); } catch (e) {} };
}

// ─── BOOT MESSAGES ───────────────────────────────────────────────────────────
const BOOT_MSGS = [
  "INITIALIZING NEURAL INTERFACE...",
  "LOADING SAUTRIK ROY v19.0...",
  "CALIBRATING IDENTITY MATRIX...",
  "DECRYPTING DEVELOPER PROFILE...",
  "AUTHENTICATING CREDENTIALS...",
  "COMPILING SKILL ARCHITECTURE...",
  "LOADING PROJECTS DATABASE...",
  "ESTABLISHING NEURAL LINK...",
  "ALL SYSTEMS NOMINAL...",
  "BOOT SEQUENCE COMPLETE ●",
];

// ─── STABLE PARTICLES ────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x:        ((i * 37 + 11) % 90) + 5,
  startY:   ((i * 23 + 17) % 60) + 30,
  size:     (i % 3) + 1,
  duration: 4 + (i % 5),
  delay:    (i * 0.18) % 3,
  opacity:  0.15 + (i % 5) * 0.06,
  color:    ["#22d3ee", "#3b82f6", "#8b5cf6"][i % 3],
}));

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Preloader({ onComplete }) {
  const [phase, setPhase]         = useState("boot"); // boot→flash→reveal→ready→speaking→exit
  const [bootProgress, setBootProgress] = useState(0);
  const [msgIdx, setMsgIdx]       = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rings, setRings]         = useState([]);

  const canvasRef     = useRef(null);
  const voiceRef      = useRef(null);
  const stopSpeech    = useRef(null);
  const ringId        = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // ── Pre-load voice as early as possible ──────────────────────────────────
  useEffect(() => {
    const load = () => {
      const vs = speechSynthesis.getVoices();
      voiceRef.current =
        vs.find(v => v.name === "Aaron") ||
        vs.find(v => v.name === "Daniel") ||
        vs.find(v => v.name === "Google UK English Male") ||
        vs.find(v => v.name === "Google US English") ||
        vs.find(v => v.lang.startsWith("en") && !v.name.toLowerCase().includes("female") && !v.name.toLowerCase().includes("zira")) ||
        vs.find(v => v.lang.startsWith("en")) || null;
    };
    load();
    if ("onvoiceschanged" in speechSynthesis) speechSynthesis.onvoiceschanged = load;
  }, []);

  // ── Canvas Matrix Rain + Boot Sequence ───────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx     = canvas.getContext("2d");
    const FONT    = 13;
    const CHARS   = "0123456789ABCDEF<>{}[]|#@$%";
    let cols      = Math.floor(canvas.width / FONT);
    let drops     = Array.from({ length: cols }, () => Math.floor(Math.random() * -80));
    let frozen    = false;
    let rafId     = null;

    const drawRain = () => {
      // Fade trail
      ctx.fillStyle = "rgba(0,0,0,0.055)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT}px "Courier New", monospace`;

      drops.forEach((y, i) => {
        if (y < 0) { drops[i]++; return; }
        const char   = CHARS[Math.floor(Math.random() * CHARS.length)];
        const bright = Math.random() > 0.96; // rare bright "leader"
        ctx.fillStyle = bright
          ? `rgba(200, 255, 255, 0.9)`
          : `rgba(6, 182, 212, ${0.08 + Math.random() * 0.22})`;
        ctx.fillText(char, i * FONT, y * FONT);

        if (y * FONT > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -40);
        } else {
          drops[i]++;
        }
      });
    };

    const loop = () => {
      if (!frozen) drawRain();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // ── Progress animation ──
    let pStart = null;
    const PDUR  = 1800;
    const progressLoop = (ts) => {
      if (!pStart) pStart = ts;
      const p    = Math.min((ts - pStart) / PDUR, 1);
      const ease = 1 - Math.pow(1 - p, 2.5);
      setBootProgress(Math.round(ease * 100));
      if (p < 1) requestAnimationFrame(progressLoop);
    };
    requestAnimationFrame(progressLoop);

    // ── Boot message cycling ──
    let mIdx = 0;
    const msgIv = setInterval(() => {
      mIdx = Math.min(mIdx + 1, BOOT_MSGS.length - 1);
      setMsgIdx(mIdx);
    }, 200);

    // ── After 2s: freeze + flash ──
    const t1 = setTimeout(() => {
      frozen = true;
      clearInterval(msgIv);
      // Fade canvas out smoothly
      let op = 1;
      const fadeIv = setInterval(() => {
        op -= 0.06;
        canvas.style.opacity = String(Math.max(0, op));
        if (op <= 0) clearInterval(fadeIv);
      }, 16);
      setPhase("flash");
      setTimeout(() => setPhase("reveal"), 180);
    }, 2000);

    // ── After 3.1s: ready ──
    const t2 = setTimeout(() => setPhase("ready"), 3100);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      clearInterval(msgIv);
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.body.style.overflow = "unset";
      stopSpeech.current?.();
    };
  }, []);

  // ── Ring shockwave system ─────────────────────────────────────────────────
  const addRing = useCallback(() => {
    const id = ++ringId.current;
    setRings(p => [...p, id]);
    setTimeout(() => setRings(p => p.filter(r => r !== id)), 2800);
  }, []);

  useEffect(() => {
    if (!isSpeaking) return;
    addRing(); setTimeout(addRing, 380); setTimeout(addRing, 760);
    const iv = setInterval(addRing, 1800);
    return () => clearInterval(iv);
  }, [isSpeaking, addRing]);

  // ── Finish ────────────────────────────────────────────────────────────────
  const finishIntro = useCallback(() => {
    stopSpeech.current?.();
    setIsSpeaking(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      onCompleteRef.current?.();
    }, 980);
  }, []);

  // ── Enter click ───────────────────────────────────────────────────────────
  const handleEnter = useCallback(() => {
    if (phase !== "ready") return;
    setPhase("speaking"); setIsSpeaking(true);
    try { speechSynthesis.cancel(); } catch (e) {}
    setTimeout(() => {
      stopSpeech.current = speakChunked(SPEECH_CHUNKS, voiceRef, finishIntro);
    }, 150);
  }, [phase, finishIntro]);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ background: "#000" }}
      animate={{ clipPath: phase === "exit" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* ── MATRIX RAIN CANVAS ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      {/* ── CRT SCANLINE TEXTURE ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px)",
        zIndex: 5,
      }} />

      {/* ── CRT VIGNETTE ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%)",
        zIndex: 6,
      }} />

      {/* ── FLASH FRAME ── */}
      <AnimatePresence>
        {phase === "flash" && (
          <motion.div
            key="flash"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 1 }} animate={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ zIndex: 20, background: "rgba(6,182,212,0.18)" }}
          />
        )}
      </AnimatePresence>

      {/* ── AMBIENT GLOW ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isSpeaking
            ? "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(6,182,212,0.24) 0%, rgba(37,99,235,0.12) 45%, transparent 70%)"
            : "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 65%)",
        }}
        transition={{ duration: 0.9 }}
        style={{ filter: "blur(32px)", zIndex: 2 }}
      />

      {/* ── FLOATING PARTICLES (speaking only) ── */}
      <AnimatePresence>
        {isSpeaking && PARTICLES.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, p.opacity, p.opacity, 0], y: -220 }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeOut", repeat: Infinity, repeatDelay: 0.3 }}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`, top: `${p.startY}%`,
              width: p.size, height: p.size,
              background: p.color, boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
              zIndex: 3,
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── RING SHOCKWAVES ── */}
      {rings.map(id => (
        <motion.div
          key={id}
          className="absolute rounded-full pointer-events-none"
          initial={{ width: 0, height: 0, opacity: 0.75, x: "-50%", y: "-50%" }}
          animate={{ width: "150vmax", height: "150vmax", opacity: 0 }}
          transition={{ duration: 2.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            top: "50%", left: "50%",
            border: "1px solid rgba(6,182,212,0.55)",
            boxShadow: "0 0 24px rgba(6,182,212,0.18), inset 0 0 24px rgba(6,182,212,0.05)",
            zIndex: 4,
          }}
        />
      ))}

      {/* ══════════════════════════════════════════════════════════════════════
          BOOT PHASE
      ══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {(phase === "boot" || phase === "flash") && (
          <motion.div
            key="boot"
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 10 }}
          >
            {/* Central SR monogram placeholder */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "clamp(1rem, 4vw, 1.6rem)",
                fontWeight: 700,
                letterSpacing: "0.5em",
                color: "rgba(6,182,212,0.6)",
                textShadow: "0 0 20px rgba(6,182,212,0.5)",
                marginBottom: 60,
              }}
            >
              SR
            </motion.div>

            {/* Boot message */}
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.12 }}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "clamp(0.55rem, 1.5vw, 0.72rem)",
                  color: msgIdx === BOOT_MSGS.length - 1 ? "#22d3ee" : "rgba(6,182,212,0.65)",
                  letterSpacing: "0.12em",
                  marginBottom: 16,
                  textShadow: msgIdx === BOOT_MSGS.length - 1 ? "0 0 12px rgba(6,182,212,0.8)" : "none",
                }}
              >
                {BOOT_MSGS[msgIdx]}
              </motion.p>
            </AnimatePresence>

            {/* Progress bar */}
            <div style={{ width: "min(320px,70vw)", height: 2, background: "rgba(255,255,255,0.07)", borderRadius: 1, overflow: "hidden", position: "relative" }}>
              <motion.div
                style={{
                  height: "100%", width: `${bootProgress}%`,
                  background: "linear-gradient(90deg, #0891b2, #06b6d4, #22d3ee)",
                  boxShadow: "0 0 12px rgba(6,182,212,0.7)",
                  borderRadius: 1,
                }}
              />
              {/* Traveling glow on the bar */}
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", top: 0, width: "30%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
              />
            </div>

            <p style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.6rem",
              color: "rgba(6,182,212,0.4)",
              marginTop: 10,
              letterSpacing: "0.25em",
            }}>
              {String(bootProgress).padStart(3, "0")} / 100
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════
          REVEAL + READY + SPEAKING
      ══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {(phase === "reveal" || phase === "ready" || phase === "speaking") && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center text-center w-full px-6"
            style={{ zIndex: 10 }}
          >
            {/* Top line */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              style={{
                width: "min(580px, 88vw)", height: 1, transformOrigin: "center", marginBottom: 10,
                background: isSpeaking
                  ? "linear-gradient(90deg, transparent, rgba(6,182,212,0.6) 25%, #22d3ee 50%, rgba(6,182,212,0.6) 75%, transparent)"
                  : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 25%, rgba(6,182,212,0.45) 50%, rgba(255,255,255,0.15) 75%, transparent)",
                transition: "background 0.7s",
                boxShadow: isSpeaking ? "0 0 12px rgba(6,182,212,0.4)" : "none",
              }}
            />

            {/* ── NAME — clip-path slide reveal ── */}
            <div style={{ overflow: "hidden", paddingBottom: 10 }}>
              <motion.h1
                initial={{ y: "108%", filter: "blur(6px)" }}
                animate={{
                  y: 0,
                  filter: isSpeaking
                    ? "blur(0px) brightness(1.5) drop-shadow(0 0 60px rgba(6,182,212,0.55))"
                    : "blur(0px) brightness(1)",
                  scale: isSpeaking ? 1.02 : 1,
                }}
                transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  fontSize: "clamp(3.5rem, 11.5vw, 9.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  background: "linear-gradient(160deg, #ffffff 0%, #a1a1aa 65%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SAUTRIK ROY
              </motion.h1>
            </div>

            {/* Bottom line */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                width: "min(580px, 88vw)", height: 1, transformOrigin: "center", marginTop: 10,
                background: isSpeaking
                  ? "linear-gradient(90deg, transparent, rgba(6,182,212,0.6) 25%, #22d3ee 50%, rgba(6,182,212,0.6) 75%, transparent)"
                  : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 25%, rgba(6,182,212,0.45) 50%, rgba(255,255,255,0.15) 75%, transparent)",
                transition: "background 0.7s",
                boxShadow: isSpeaking ? "0 0 12px rgba(6,182,212,0.4)" : "none",
              }}
            />

            {/* Tagline */}
            <AnimatePresence>
              {(phase === "ready" || phase === "speaking") && (
                <motion.p
                  key="tagline"
                  initial={{ opacity: 0, letterSpacing: "0em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    marginTop: 22, fontSize: "0.68rem", fontWeight: 500,
                    textTransform: "uppercase",
                    color: isSpeaking ? "#22d3ee" : "rgba(6,182,212,0.7)",
                    transition: "color 0.5s",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  Full Stack Developer &nbsp;·&nbsp; CSE Undergrad
                </motion.p>
              )}
            </AnimatePresence>

            {/* "SYSTEM ONLINE" status text (during reveal, before ready) */}
            <AnimatePresence>
              {phase === "reveal" && (
                <motion.p
                  key="online"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.1, times: [0, 0.2, 0.75, 1] }}
                  style={{
                    marginTop: 30,
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.65rem", letterSpacing: "0.25em",
                    color: "#22d3ee",
                    textShadow: "0 0 14px rgba(6,182,212,0.9)",
                  }}
                >
                  SYSTEM ONLINE ●
                </motion.p>
              )}
            </AnimatePresence>

            {/* Audio visualizer */}
            <AnimatePresence>
              {isSpeaking && (
                <motion.div
                  key="bars"
                  initial={{ opacity: 0, y: 14, scaleY: 0 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-[4px] items-end justify-center"
                  style={{ marginTop: 24, height: 34 }}
                >
                  {[0.35, 0.9, 0.5, 1.2, 0.3, 1.1, 0.55, 1.3, 0.4, 0.85, 0.45, 0.95, 0.6, 1.0].map((f, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [3, Math.round(30 * f), 3] }}
                      transition={{ duration: 0.16 + i * 0.018, repeat: Infinity, delay: i * 0.04, repeatType: "reverse", ease: "easeInOut" }}
                      style={{
                        width: 3, minHeight: 3, borderRadius: 99,
                        background: `hsl(${186 + i * 5}, 82%, ${50 + i * 2}%)`,
                        boxShadow: `0 0 6px hsl(${186 + i * 5}, 82%, ${50 + i * 2}%)`,
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
                  key="enter"
                  initial={{ opacity: 0, y: 28, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.92, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleEnter}
                  style={{
                    marginTop: 36, position: "relative",
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "15px 40px", borderRadius: 999,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(6,182,212,0.04))",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(20px)", color: "white",
                    fontSize: "0.75rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    cursor: "pointer", overflow: "hidden",
                    boxShadow: "0 0 50px rgba(6,182,212,0.12), 0 0 0 1px rgba(6,182,212,0.08)",
                  }}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 0 90px rgba(6,182,212,0.5), 0 0 0 1px rgba(6,182,212,0.3)",
                    borderColor: "rgba(6,182,212,0.65)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {/* Shimmer sweep */}
                  <motion.div
                    style={{
                      position: "absolute", inset: 0, pointerEvents: "none",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                      x: "-100%",
                    }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Pulsing dot */}
                  <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
                    <span style={{
                      position: "absolute", inset: 0, borderRadius: "50%", background: "#22d3ee",
                      opacity: 0.6, animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite",
                    }} />
                    <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee" }} />
                  </span>
                  <span style={{ position: "relative" }}>Enter My World</span>
                  <svg style={{ position: "relative" }} width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              )}

              {isSpeaking && (
                <motion.button
                  key="skip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.28 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 2.5 }}
                  onClick={finishIntro}
                  style={{
                    marginTop: 28, background: "none", border: "none",
                    color: "#52525b", fontSize: "0.6rem",
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: "0.35em", textTransform: "uppercase", cursor: "pointer",
                  }}
                >
                  SKIP ›
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes ping { 75%,100% { transform: scale(2.2); opacity: 0; } }`}</style>
    </motion.div>
  );
}
