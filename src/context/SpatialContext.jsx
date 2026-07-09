import { createContext, useState, useContext } from "react";

const SpatialContext = createContext();

export function SpatialProvider({ children }) {
  const [isSpatialMode, setIsSpatialMode] = useState(false);
  const toggleSpatialMode = () => setIsSpatialMode((prev) => !prev);

  return (
    <SpatialContext.Provider value={{ isSpatialMode, toggleSpatialMode }}>
      {children}
    </SpatialContext.Provider>
  );
}

export const useSpatial = () => useContext(SpatialContext);
