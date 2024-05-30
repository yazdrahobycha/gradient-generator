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
  const { angle, setAngle } = useContext(AngleContext);
  const { mode, setMode } = useContext(ModeContext);
  const { precision, setPrecision } = useContext(PrecisionContext);
  const { colors, setColors, getActiveColors } = useContext(ColorsContext);
  const { bezier, setBezier } = useContext(BezierContext);

  function getOptionsfromUrl() {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
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
    const filterParams = `?colors=${encodedColors}&mode=${mode}&angle=${angle}&precision=${precision}&bezier=${bezier}`;
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
