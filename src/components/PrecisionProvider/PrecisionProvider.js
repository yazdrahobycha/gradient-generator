import React, { useState, useMemo, createContext } from "react";
import { DEFAULT_PRECISION } from "../../constants";
export const PrecisionContext = createContext();

function PrecisionProvider({ children }) {
  const [precision, setPrecision] = useState(DEFAULT_PRECISION);

  function handlePrecisionChange(e) {
    setPrecision(e.target.value);
  }

  const value = useMemo(() => {
    const obj = {
      precision,
      handlePrecisionChange,
    };
    return obj;
  }, [precision]);

  return (
    <PrecisionContext.Provider value={value}>
      {children}
    </PrecisionContext.Provider>
  );
}

export default PrecisionProvider;
