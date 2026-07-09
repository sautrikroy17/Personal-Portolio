import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Code, Zap, Briefcase, Mail, Download, Terminal } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-4 1.4a13.3 13.3 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.4 5.4 0 0 0-.15 3.8A5.44 5.44 0 0 0 1.3 10.3c0 5 3 6.2 6 6.5A5.8 5.8 0 0 0 6 20v2M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { id: "home", name: "Go to Home", icon: Home, action: () => { window.location.hash = "#top"; setIsOpen(false); } },
    { id: "projects", name: "View Projects", icon: Code, action: () => { window.location.hash = "#projects"; setIsOpen(false); } },
    { id: "skills", name: "View Skills", icon: Zap, action: () => { window.location.hash = "#skills"; setIsOpen(false); } },
    { id: "experience", name: "View Experience", icon: Briefcase, action: () => { window.location.hash = "#experience"; setIsOpen(false); } },
    { id: "contact", name: "Contact Me", icon: Mail, action: () => { window.location.hash = "#contact"; setIsOpen(false); } },
    { id: "github", name: "Open GitHub", icon: GithubIcon, action: () => { window.open("https://github.com/sautrikroy17", "_blank"); setIsOpen(false); } },
    { id: "resume", name: "Download Resume", icon: Download, action: () => { alert("Resume download simulated for demo!"); setIsOpen(false); } },
  ];

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter" && filteredCommands.length > 0) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-zinc-400 mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white text-lg placeholder:text-zinc-500 outline-none font-sans"
              />
              <div className="flex items-center space-x-1">
                <kbd className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800 rounded">ESC</kbd>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-14 text-center text-zinc-500 flex flex-col items-center">
                  <Terminal className="w-10 h-10 mb-3 opacity-50" />
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                filteredCommands.map((command, index) => {
                  const Icon = command.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={command.id}
                      onClick={command.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-colors ${
                        isSelected ? "bg-cyan-500/20 text-cyan-300" : "text-zinc-300 hover:bg-zinc-800/50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mr-3 ${isSelected ? "text-cyan-400" : "text-zinc-500"}`} />
                      <span className="font-medium">{command.name}</span>
                      {isSelected && (
                        <span className="ml-auto text-xs font-mono text-cyan-500">↵</span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
            <div className="px-4 py-3 border-t border-white/10 bg-zinc-950/50 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center"><kbd className="mr-1 font-mono">↑↓</kbd> to navigate</span>
                <span className="flex items-center"><kbd className="mr-1 font-mono">↵</kbd> to select</span>
              </div>
              <div>Developer Command Palette</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
