import React, { createContext, useState } from "react";
import { createGradientBackground, getRandomCubicBezier } from "../../helpers";
import chroma from "chroma-js";
import {
  DEFAULT_PRECISION,
  INITIAL_COLORS_STATES,
  DEFAULT_ANGLE,
  DEFAULT_COLOR_MODE,
  DEFAULT_BEZIER_PRESET,
  SUPPORTED_COLOR_MODES,
  DEFAULT_PRECISION_RANGE,
} from "../../constants";

export const GradientDataContext = createContext();

function GradientDataProvider({ children }) {
  // states
  const [isNotFirstMount, setIsNotFirstMount] = useState(true);
  const [colors, setColors] = useState(INITIAL_COLORS_STATES);
  const [angle, setAngle] = useState(DEFAULT_ANGLE);
  const [precision, setPrecision] = useState(DEFAULT_PRECISION);
  const [mode, setMode] = useState(DEFAULT_COLOR_MODE);
  const [bezier, setBezier] = useState(DEFAULT_BEZIER_PRESET.parameters);

  // EVENT HANDLERS

  function handleBezierChange(bezierValue) {
    if (
      bezierValue.some((num) => {
        return num < -0.26 || num > 1.26 || isNaN(num);
      })
    ) {
      return;
    }
    setBezier(bezierValue);
  }

  function handleModeChange(modeValue) {
    if (!SUPPORTED_COLOR_MODES.includes(modeValue)) {
      return;
    }
    setMode(modeValue);
  }

  function handlePrecisionChange(precisionValue) {
    precisionValue = Number(precisionValue);
    if (
      precisionValue <= 0 ||
      precisionValue > DEFAULT_PRECISION_RANGE ||
      isNaN(precisionValue)
    ) {
      return;
    }
    setPrecision(precisionValue);
  }

  function handleAngleChange(angleValue) {
    angleValue = Number(angleValue);
    if (angleValue < 0 || angleValue > 365 || isNaN(angleValue)) {
      return;
    }
    setAngle(angleValue);
  }

  // only for handling change from within component
  // without validation and dependent on passes index
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

  // COLORS RELATED FUNCTIONALITY

  // function to call when updating colors states with the value
  // from URL parameters
  function updateColors(colorsArr) {
    // validate array of colors passed as parameter url
    const validityCheck = colorsArr.some((colorEntry) => {
      return (
        !chroma.valid(colorEntry.color) ||
        typeof colorEntry.active !== "boolean"
      );
    });
    if (validityCheck) {
      return;
    }

    const newColors = colorsArr.map((colorsEntry, i) => {
      colorsEntry.id = colors[i].id;
      return colorsEntry;
    });
    setColors(newColors);
  }

  // function that return filtered array of active actual colors
  // (not colors entries)
  function getActiveColors() {
    return colors
      .filter((colorEntry) => colorEntry.active)
      .map((colorEntry) => colorEntry.color);
  }

  // delete/add color logic
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

  // MULTIPLE STATES FUNCTIONALITY

  function getUrlOutput() {
    const baseUrl = window.location.origin;
    const colorsWithoutId = colors.map(({ color, active }) => ({
      color,
      active,
    }));
    const encodedColors = encodeURIComponent(JSON.stringify(colorsWithoutId));
    const filterParams = `?mode=${mode}&angle=${angle}&precision=${precision}&bezier=${bezier}&colors=${encodedColors}`;
    return baseUrl + filterParams;
  }

  function getCssOutput() {
    const colorsEntries = getActiveColors();
    const gradientStyles = createGradientBackground(
      colorsEntries,
      angle,
      mode,
      bezier,
      precision
    );
    return gradientStyles;
  }

  function randomizeOptions() {
    const newColors = colors.map((colorEntry) => {
      return {
        color: chroma.random().hex(),
        active: Math.random() >= 0.5,
        id: colorEntry.id,
      };
    });
    let activeColorsCount = newColors.filter(
      (colorsEntry) => colorsEntry.active
    ).length;
    while (activeColorsCount < 2) {
      newColors.forEach(
        (colorEntry) => (colorEntry.active = Math.random() <= 0.5)
      );
      activeColorsCount = newColors.filter(
        (colorsEntry) => colorsEntry.active
      ).length;
    }
    const newAngle = Math.round(Math.random() * 72) * 5;
    const newPrecision = Math.round(Math.floor(Math.random() * 20)) + 1;
    const newMode =
      SUPPORTED_COLOR_MODES[
        Math.floor(Math.random() * SUPPORTED_COLOR_MODES.length)
      ];
    const newBezier = getRandomCubicBezier();

    setColors(newColors);
    setAngle(newAngle);
    setMode(newMode);
    setPrecision(newPrecision);
    setBezier(newBezier);
  }

  function getOptionsfromUrl() {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      switch (key) {
        case "colors":
          const decodedColors = JSON.parse(decodeURIComponent(value));
          updateColors(decodedColors);
          break;
        case "mode":
          handleModeChange(value);
          break;
        case "angle":
          handleAngleChange(value);
          break;
        case "precision":
          handlePrecisionChange(value);
          break;
        case "bezier":
          const bezierArray = value.split(",").map((number) => Number(number));
          handleBezierChange(bezierArray);
          break;
      }
    });
  }

  if (isNotFirstMount) {
    getOptionsfromUrl();
    setIsNotFirstMount(false);
  }

  const value = {
    colors,
    angle,
    mode,
    precision,
    bezier,
    handleColorChange,
    handleAngleChange,
    handlePrecisionChange,
    handleModeChange,
    handleBezierChange,
    handleActiveColor,
    getActiveColors,
    getUrlOutput,
    getCssOutput,
    randomizeOptions,
  };

  return (
    <GradientDataContext.Provider value={value}>
      {children}
    </GradientDataContext.Provider>
  );
}

export default GradientDataProvider;
