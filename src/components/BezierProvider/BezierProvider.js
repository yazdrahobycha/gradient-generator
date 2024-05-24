import React, { useState, useMemo, createContext } from "react";
import { DEFAULT_BEZIER_PRESET } from "../../constants";
export const BezierContext = createContext();

function BezierProvider({ children }) {
  const [bezier, setBezier] = useState(DEFAULT_BEZIER_PRESET.parameters);

  function handleBezierChange(bezierValue) {
    setBezier(bezierValue);
  }

  const value = useMemo(() => {
    const obj = {
      bezier,
      handleBezierChange,
    };
    return obj;
  }, [bezier]);

  return (
    <BezierContext.Provider value={value}>{children}</BezierContext.Provider>
  );
}

export default BezierProvider;
