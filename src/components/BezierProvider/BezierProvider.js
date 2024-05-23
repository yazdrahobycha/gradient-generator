import React, { useState, useMemo, createContext } from "react";
export const BezierContext = createContext();

function BezierProvider({ children }) {
  const [bezier, setBezier] = useState([0.3, 0.3, 0.7, 0.7]);

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
