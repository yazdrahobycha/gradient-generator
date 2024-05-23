import React, { createContext, useMemo, useState } from "react";
export const ModeContext = createContext();

function ModeProvider({ children }) {
  const [mode, setMode] = useState("lab");

  function handleModeChange(e) {
    setMode(e.target.value);
  }

  const value = useMemo(() => {
    const obj = {
      mode,
      handleModeChange,
    };
    return obj;
  }, [mode]);

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export default ModeProvider;
