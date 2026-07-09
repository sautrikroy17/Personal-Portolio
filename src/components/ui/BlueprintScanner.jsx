import { motion, AnimatePresence } from "framer-motion";
import { useBlueprint } from "../../context/BlueprintContext";

export default function BlueprintScanner() {
  const { isScanning } = useBlueprint();

  return (
    <AnimatePresence>
      {isScanning && (
        <motion.div
          initial={{ top: "-20%" }}
          animate={{ top: "120%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "linear" }}
          className="fixed left-0 right-0 h-1 z-[99999] pointer-events-none"
        >
          {/* Glowing laser line */}
          <div className="w-full h-[2px] bg-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)] relative">
            {/* Scan trail */}
            <div className="absolute bottom-full left-0 right-0 h-64 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
            <div className="absolute top-full left-0 right-0 h-16 bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
