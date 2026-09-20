import { motion } from "framer-motion";

export default function SRLogo({ className = "" }) {
  return (
    <motion.div
      className={`inline-flex items-baseline select-none cursor-pointer group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-display transition-colors duration-200 group-hover:text-white leading-none">
        SR
      </span>
      <span className="w-1.5 h-1.5 bg-[#00e5ff] inline-block ml-0.5 self-end mb-[2px] rounded-[1px] shadow-[0_0_6px_rgba(0,229,255,0.8)]" />
    </motion.div>
  );
}
