import { motion } from "framer-motion";

export default function SRLogo({ className = "w-10 h-10" }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`overflow-visible cursor-pointer ${className}`}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <defs>
        <linearGradient id="sr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id="sr-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* S Character */}
      <motion.path
        d="M 45 35 C 45 20, 20 20, 20 35 C 20 55, 45 45, 45 65 C 45 80, 20 80, 20 65"
        fill="transparent"
        stroke="url(#sr-grad)"
        strokeWidth="7"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0, filter: "drop-shadow(0px 0px 0px rgba(34,211,238,0))" },
          visible: { 
            pathLength: 1, 
            opacity: 1, 
            filter: "drop-shadow(0px 0px 0px rgba(34,211,238,0))",
            transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 1 } 
          },
          hover: { 
            filter: "drop-shadow(0px 0px 15px rgba(34,211,238,0.8))",
            scale: 1.05,
            transition: { duration: 0.3 } 
          }
        }}
      />
      
      {/* R Character */}
      <motion.path
        d="M 55 25 L 55 75 M 55 25 C 80 25, 80 50, 55 50 L 75 75"
        fill="transparent"
        stroke="url(#sr-grad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0, filter: "drop-shadow(0px 0px 0px rgba(34,211,238,0))" },
          visible: { 
            pathLength: 1, 
            opacity: 1, 
            filter: "drop-shadow(0px 0px 0px rgba(34,211,238,0))",
            transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 } 
          },
          hover: { 
            filter: "drop-shadow(0px 0px 15px rgba(34,211,238,0.8))",
            scale: 1.05,
            transition: { duration: 0.3 } 
          }
        }}
      />
    </motion.svg>
  );
}
