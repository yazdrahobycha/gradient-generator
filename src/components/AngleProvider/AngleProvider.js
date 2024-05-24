import React, { createContext, useState, useMemo } from "react";
import { DEFAULT_ANGLE } from "../../constants";

export const AngleContext = createContext();

function AngleProvider({ children }) {
  const [angle, setAngle] = useState(DEFAULT_ANGLE);

  function handleAngleChange(e) {
    setAngle(e.target.value);
  }

  const value = useMemo(() => {
    const obj = {
      angle,
      handleAngleChange,
    };
    return obj;
  }, [angle]);

  return (
    <AngleContext.Provider value={value}>{children}</AngleContext.Provider>
  );
}

export default AngleProvider;
