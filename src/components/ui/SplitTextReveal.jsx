import { motion } from "framer-motion";

export default function SplitTextReveal({ text, delay = 0, className = "" }) {
  // Split text into words, then words into characters for a staggered reveal
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(8px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, index) => (
            <motion.span
              variants={child}
              key={index}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
