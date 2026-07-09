import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function PaperAirplaneButton({ onClick }) {
  const [status, setStatus] = useState("idle"); // idle, flying, success

  const handleClick = (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    
    setStatus("flying");
    if (onClick) onClick(e);

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative group flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white transition-all rounded-xl ${
        status === "success" 
          ? "bg-emerald-500 hover:bg-emerald-400" 
          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
      } ${status === "idle" ? "hover:scale-[1.02] active:scale-95" : ""} overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center"
          >
            Send Message
            <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        )}

        {status === "flying" && (
          <motion.div
            key="flying"
            initial={{ x: -50, y: 50, opacity: 0, scale: 0.5 }}
            animate={{ 
              x: [0, 100, 300], 
              y: [0, -50, -200],
              opacity: [1, 1, 0],
              scale: [1, 1.2, 0.5]
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute flex items-center justify-center"
          >
            <Send className="w-8 h-8 text-white rotate-45" />
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center"
          >
            Sent Successfully!
            <Check className="w-6 h-6 ml-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
