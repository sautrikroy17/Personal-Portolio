import { createContext, useState, useContext, useEffect } from "react";

const BlueprintContext = createContext();

export function BlueprintProvider({ children }) {
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const toggleBlueprintMode = () => {
    if (isScanning) return; // Prevent toggling while scanning
    setIsScanning(true);
    
    // Halfway through the scan, toggle the actual mode
    setTimeout(() => {
      setIsBlueprintMode((prev) => {
        const next = !prev;
        if (next) {
          document.body.classList.add("blueprint-mode");
        } else {
          document.body.classList.remove("blueprint-mode");
        }
        return next;
      });
    }, 1000); // 1 second into the 2 second scan

    // End scan
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + X or Cmd + X
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
        e.preventDefault();
        toggleBlueprintMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isScanning]);

  return (
    <BlueprintContext.Provider value={{ isBlueprintMode, toggleBlueprintMode, isScanning }}>
      {children}
    </BlueprintContext.Provider>
  );
}

export const useBlueprint = () => useContext(BlueprintContext);
