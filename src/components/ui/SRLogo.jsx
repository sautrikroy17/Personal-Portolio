import { motion } from "framer-motion";

export default function SRLogo({ className = "" }) {
  return (
    <motion.div
      className={`flex items-baseline font-black tracking-tight select-none cursor-pointer group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display transition-colors duration-200 group-hover:text-white">
        SR
      </span>
      <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] ml-[1px]">
        .
      </span>
    </motion.div>
  );
}
