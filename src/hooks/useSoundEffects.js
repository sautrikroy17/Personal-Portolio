import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function useSoundEffects() {
  const { scrollY } = useScroll();
  const audioCtxRef = useRef(null);
  const lastTickScroll = useRef(0);

  useEffect(() => {
    // Create AudioContext only after first interaction to respect browser policy
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
    };
    
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });
    
    return () => {
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const playTick = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    // High pitch, very short subtle "tick"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01); // Very quiet
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Play a tick every 400 pixels scrolled
    if (Math.abs(latest - lastTickScroll.current) > 400) {
      playTick();
      lastTickScroll.current = latest;
    }
  });

  return { playTick };
}
