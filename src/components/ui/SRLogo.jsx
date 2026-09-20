import { motion } from "framer-motion";

export default function SRLogo({ className = "" }) {
  return (
    <motion.div
      className={`inline-flex items-center select-none cursor-pointer group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Bold White SR */}
      <span className="text-xl sm:text-2xl font-black text-white tracking-tighter font-sans leading-none">
        SR
      </span>
      {/* Official Cyan Square Dot (as shown in reference) */}
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00e5ff] inline-block ml-0.5 self-end mb-0.5 shadow-[0_0_10px_rgba(0,229,255,0.9)]" />
    </motion.div>
  );
}
