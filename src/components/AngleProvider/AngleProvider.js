import React, { createContext, useState, useMemo } from "react";
import { DEFAULT_ANGLE } from "../../constants";

export const AngleContext = createContext();

function AngleProvider({ children }) {
  const [angle, setAngle] = useState(DEFAULT_ANGLE);

  function handleAngleChange(angleValue) {
    angleValue = Number(angleValue);
    if (angleValue < 0 || angleValue > 365 || isNaN(angleValue)) {
      return
    }
    setAngle(angleValue);
  }

  const value = useMemo(() => {
    const obj = {
      angle,
      setAngle,
      handleAngleChange,
    };
    return obj;
  }, [angle]);

  return (
    <AngleContext.Provider value={value}>{children}</AngleContext.Provider>
  );
}

export default AngleProvider;
