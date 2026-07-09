import { createContext, useState, useContext } from "react";

const SpatialContext = createContext();

export function SpatialProvider({ children }) {
  const [isSpatialMode, setIsSpatialMode] = useState(true); // ON by default — it's the signature experience
  const toggleSpatialMode = () => setIsSpatialMode((prev) => !prev);

  return (
    <SpatialContext.Provider value={{ isSpatialMode, toggleSpatialMode }}>
      {children}
    </SpatialContext.Provider>
  );
}

export const useSpatial = () => useContext(SpatialContext);
