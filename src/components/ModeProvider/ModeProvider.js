import React, { createContext, useMemo, useState } from "react";
import { SUPPORTED_COLOR_MODES, DEFAULT_COLOR_MODE } from "../../constants";
export const ModeContext = createContext();

function ModeProvider({ children }) {
  const [mode, setMode] = useState(DEFAULT_COLOR_MODE);

  function handleModeChange(modeValue) {
    if (!SUPPORTED_COLOR_MODES.includes(modeValue)) {
      return;
    }
    setMode(modeValue);
  }

  const value = useMemo(() => {
    const obj = {
      mode,
      setMode,
      handleModeChange,
    };
    return obj;
  }, [mode]);

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export default ModeProvider;
