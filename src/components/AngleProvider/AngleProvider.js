import React, { createContext, useState, useMemo } from "react";

export const AngleContext = createContext();
function AngleProvider({ children }) {
  const [angle, setAngle] = useState(60);

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
