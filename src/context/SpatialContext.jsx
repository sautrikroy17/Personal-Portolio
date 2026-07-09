import { createContext, useState, useContext, useEffect } from "react";

const SpatialContext = createContext();

export function SpatialProvider({ children }) {
  const [isSpatialMode, setIsSpatialMode] = useState(false);

  const toggleSpatialMode = () => {
    setIsSpatialMode((prev) => !prev);
  };

  useEffect(() => {
    if (isSpatialMode) {
      document.body.classList.add("spatial-mode-active");
    } else {
      document.body.classList.remove("spatial-mode-active");
    }
  }, [isSpatialMode]);

  return (
    <SpatialContext.Provider value={{ isSpatialMode, toggleSpatialMode }}>
      {children}
    </SpatialContext.Provider>
  );
}

export const useSpatial = () => useContext(SpatialContext);
