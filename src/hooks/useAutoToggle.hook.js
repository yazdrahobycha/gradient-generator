import React, { useState, useEffect } from "react";

export function useAutoToggle(isJustCopied = false, timeOutDuration = 2000) {
  const [value, setValue] = useState(isJustCopied);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isJustCopied !== value) {
        console.log("timer is set");
        setValue(isJustCopied);
      }
    }, timeOutDuration);

    return () => clearTimeout(timer);
  }, [value]);
  function toggleState() {
    setValue(!isJustCopied);
  }

  return [value, toggleState];
}
