import React, { useState, useMemo, createContext } from "react";
import { DEFAULT_PRECISION, DEFAULT_PRECISION_RANGE } from "../../constants";
export const PrecisionContext = createContext();

function PrecisionProvider({ children }) {
  const [precision, setPrecision] = useState(DEFAULT_PRECISION);

  function handlePrecisionChange(precisionValue) {
    precisionValue = Number(precisionValue);
    if (
      precisionValue <= 0 ||
      precisionValue > DEFAULT_PRECISION_RANGE ||
      isNaN(precisionValue)
    ) {
      return
    }
    setPrecision(precisionValue);
  }

  const value = useMemo(() => {
    const obj = {
      precision,
      setPrecision,
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
