import React, { createContext, useCallback, useMemo, useState } from "react";

export const ColorsContext = createContext();

const initialColorsState = [
  { color: "#FF3DCE", active: true },
  { color: "#F94B06", active: true },
  { color: "#FFE666", active: false },
  { color: "#E20BBA", active: false },
  { color: "#4EDF00", active: false },
];
initialColorsState.forEach((entry) => {
  entry.id = crypto.randomUUID();
});

function ColorsProvider({ children }) {
  const [colors, setColors] = useState(initialColorsState);

  function handleColorChange(e, i) {
    // we have to pull the newest state value manualy
    // beacause we're memoising this function in order to be able
    // to memoize ColorPicker component (because this function changes its referens every rerender we're
    //not able to memoize the component where it is as a prop), so it doesbt rerender every ColorPicker every time the
    // value of one ColorPicker color changes, and because this funct will never be updated ([] as param here)
    // it will have stale value. Now were both having function that is not changing its reference and the proper state
    setColors((currentArray) => {
      const newArray = [...currentArray];
      newArray[i].color = e.target.value;
      return newArray;
    });
  }

  function getActiveColors() {
    console.log(colors);
    return colors
      .filter((colorEntry) => colorEntry.active)
      .map((colorEntry) => colorEntry.color);
  }

  function handleActiveColor(i) {
    const activeColors = getActiveColors();
    // dont change active state if there will be less than two colors
    // and if the operation is delete (then the current value of active will be true, cause
    // we will want it to be false)
    if (activeColors.length <= 2 && colors[i].active) {
      return;
    }

    //change active state of the color
    setColors((currentArray) => {
      const newArray = [...currentArray];
      newArray[i].active = !newArray[i].active;
      return newArray;
    });
  }

  const value = useMemo(() => {
    const obj = {
      colors,
      setColors,
      handleColorChange,
      handleActiveColor,
      getActiveColors,
    };
    return obj;
  }, [colors]);

  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
}

export default ColorsProvider;