import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// The intro text shown word-by-word under the genmoji
const INTRO_WORDS = ["Hey,", "I'm", "Sautrik", "Roy.", "CSE", "undergrad", "&", "Full", "Stack", "Dev."];

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // enter -> speaking -> exit
  const [wordIndex, setWordIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const wordTimerRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Short delay then transition to speaking phase
    const enterDelay = setTimeout(() => {
      setPhase("speaking");
      setIsSpeaking(true);
      startWordReveal();
      attemptSpeech();
    }, 600);

    return () => {
      clearTimeout(enterDelay);
      clearInterval(wordTimerRef.current);
      document.body.style.overflow = "unset";
      try { speechSynthesis.cancel(); } catch (e) {}
    };
  }, []);

  const startWordReveal = () => {
    let idx = 0;
    setWordIndex(0);
    wordTimerRef.current = setInterval(() => {
      idx += 1;
      setWordIndex(idx);
      if (idx >= INTRO_WORDS.length) {
        clearInterval(wordTimerRef.current);
      }
    }, 280); // one word every 280ms — reads naturally with speech
  };

  const finishIntro = () => {
    setIsSpeaking(false);
    setPhase("exit");
    setTimeout(() => {
      document.body.style.overflow = "unset";
      if (onCompleteRef.current) onCompleteRef.current();
    }, 900);
  };

  const attemptSpeech = () => {
    if (!window.speechSynthesis) {
      // Fallback: just wait for words to finish + buffer
      setTimeout(finishIntro, INTRO_WORDS.length * 280 + 800);
      return;
    }

    const speak = () => {
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(
        "Hey, I'm Sautrik Roy. CSE undergrad and Full Stack Developer. Welcome."
      );
      utter.rate = 1.0;
      utter.pitch = 1.05;
      utter.volume = 1;

      // Pick best available voice
      const voices = speechSynthesis.getVoices();
      const preferred = voices.find(v =>
        v.name.includes("Daniel") ||
        v.name.includes("Aaron") ||
        v.name.includes("Google UK English Male") ||
        v.name.includes("Alex") ||
        v.lang?.startsWith("en")
      );
      if (preferred) utter.voice = preferred;

      utter.onend = finishIntro;
      utter.onerror = () => {
        // On error, wait for words + buffer then finish
        setTimeout(finishIntro, INTRO_WORDS.length * 280 + 600);
      };

      speechSynthesis.speak(utter);

      // Hard fallback: if speech takes too long
      setTimeout(() => {
        if (speechSynthesis.speaking) return;
        finishIntro();
      }, INTRO_WORDS.length * 280 + 1200);
    };

    // Chrome needs voices loaded first
    if (speechSynthesis.getVoices().length > 0) {
      speak();
    } else {
      speechSynthesis.onvoiceschanged = speak;
      // Extra fallback if onvoiceschanged never fires (Safari)
      setTimeout(speak, 400);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center"
      animate={{
        clipPath: phase === "exit"
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)"
      }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      {/* Radial glow behind genmoji */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 360,
          height: 360,
          background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
        }}
      />

      {/* Genmoji Avatar */}
      <AnimatePresence>
        {(phase === "speaking" || phase === "exit") && (
          <motion.div
            key="genmoji"
            initial={{ opacity: 0, scale: 0.75, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Avatar container with floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ width: 200, height: 200 }}
            >
              {/* The image */}
              <img
                src="/memoji.png"
                alt="Sautrik"
                className="w-full h-full object-contain object-center select-none"
                draggable={false}
                style={{ filter: "drop-shadow(0 20px 40px rgba(34,211,238,0.25))" }}
              />

              {/* Mouth overlay — white ellipse that animates to simulate talking */}
              {isSpeaking && (
                <div
                  className="mouth-talking absolute"
                  style={{
                    // Positioned over the mouth area of the talking genmoji
                    bottom: "28%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 24,
                    height: 12,
                    background: "#1a0a00",
                    borderRadius: "0 0 50% 50%",
                    opacity: 0.85,
                  }}
                />
              )}
            </motion.div>

            {/* Audio visualizer bars */}
            {isSpeaking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-5 flex gap-[5px] items-end justify-center"
                style={{ height: 28 }}
              >
                {[0.6, 1, 0.7, 1.3, 0.5, 1.1, 0.8, 1.4, 0.6, 1].map((factor, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [6, 24 * factor, 6] }}
                    transition={{
                      duration: 0.3 + i * 0.04,
                      repeat: Infinity,
                      delay: i * 0.07,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="rounded-full"
                    style={{
                      width: 3,
                      minHeight: 4,
                      background: `hsl(${190 + i * 5}, 80%, ${55 + i * 2}%)`,
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Intro words — word-by-word reveal */}
            <div
              className="mt-8 flex flex-wrap justify-center gap-x-[0.4em] gap-y-1 max-w-xs text-center"
              style={{ minHeight: 36 }}
            >
              {INTRO_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="word-reveal text-white font-medium text-lg"
                  style={{
                    animationDelay: `${i * 0.28}s`,
                    animationPlayState: wordIndex > i ? "running" : "paused",
                    opacity: wordIndex > i ? undefined : 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
