import React, { createContext, useState, useContext, useEffect } from "react";
import { createGradientBackground } from "../../helpers";
import ColorsProvider, {
  ColorsContext,
} from "../ColorsProvider/ColorsProvider";
import ModeProvider, { ModeContext } from "../ModeProvider/ModeProvider";
import AngleProvider, { AngleContext } from "../AngleProvider/AngleProvider";
import PrecisionProvider, {
  PrecisionContext,
} from "../PrecisionProvider/PrecisionProvider";
import BezierProvider, {
  BezierContext,
} from "../BezierProvider/BezierProvider";

export const GradientDataContext = createContext();

function GradientDataProvider({ children }) {
  return (
    <ColorsProvider>
      <ModeProvider>
        <AngleProvider>
          <PrecisionProvider>
            <BezierProvider>
              <GradientDataContext.Provider value={{}}>
                {children}
              </GradientDataContext.Provider>
            </BezierProvider>
          </PrecisionProvider>
        </AngleProvider>
      </ModeProvider>
    </ColorsProvider>
  );
}

export const useGradientData = () => {
  const { angle, handleAngleChange } = useContext(AngleContext);
  const { mode, handleModeChange } = useContext(ModeContext);
  const { precision, handlePrecisionChange } = useContext(PrecisionContext);
  const { bezier, handleBezierChange } = useContext(BezierContext);
  const { colors, getActiveColors, updateColors } = useContext(ColorsContext);

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

  function getUrlOutput() {
    const baseUrl = window.location.origin;
    const colorsWithoutId = colors.map(({ color, active }) => ({
      color,
      active,
    }));
    const encodedColors = encodeURIComponent(JSON.stringify(colorsWithoutId));
    // decoded colors
    // const decodedColors = JSON.parse(decodeURIComponent(encodedColors));
    // console.log(decodedColors[0].color);
    const filterParams = `?mode=${mode}&angle=${angle}&precision=${precision}&bezier=${bezier}&colors=${encodedColors}`;
    return baseUrl + filterParams;
  }

  function getCssOutput() {
    const colorsEntries = getActiveColors();
    console.log("Generating new object with output!!");
    const gradientStyles = createGradientBackground(
      colorsEntries,
      angle,
      mode,
      bezier,
      precision
    );
    return gradientStyles;
  }

  return { getCssOutput, getUrlOutput, getOptionsfromUrl };
};

export default GradientDataProvider;
