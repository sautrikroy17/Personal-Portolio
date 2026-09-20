import { motion } from "framer-motion";

export default function SRLogo({ className = "" }) {
  return (
    <motion.div
      className={`inline-flex items-baseline select-none cursor-pointer group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display transition-colors duration-200 group-hover:text-white leading-none">
        SR
      </span>
      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#00e5ff] inline-block ml-1 self-end mb-0.5 shadow-[0_0_12px_rgba(0,229,255,0.9)] rounded-[1.5px]" />
    </motion.div>
  );
}
