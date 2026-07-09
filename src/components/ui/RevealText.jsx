import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealText({ text, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ 
        overflow: "hidden", 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center",
        perspective: "1000px"
      }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          style={{ marginRight: "0.3em", display: "inline-block" }} 
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
