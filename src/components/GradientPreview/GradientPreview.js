import React, { useContext, useEffect } from "react";
import styles from "./gradient-preview.module.css";
import { createGradientBackground } from "../../helpers";
// variablesfrom relevant contexts needed for for createGradientBackground function
import { ColorsContext } from "../ColorsProvider/ColorsProvider";
import { ModeContext } from "../ModeProvider/ModeProvider";
import { AngleContext } from "../AngleProvider/AngleProvider";
import { PrecisionContext } from "../PrecisionProvider/PrecisionProvider";
import { BezierContext } from "../BezierProvider/BezierProvider";

function GradientPreview({ setGradientOutput }) {
  const { getActiveColors } = useContext(ColorsContext);
  const { mode } = useContext(ModeContext);
  const { angle } = useContext(AngleContext);
  const { precision } = useContext(PrecisionContext);
  const { bezier } = useContext(BezierContext);

  const colorsEntries = getActiveColors();
  const gradientStyles = createGradientBackground(
    colorsEntries,
    angle,
    mode,
    bezier,
    precision
  );

  const codeString = `.element {\n    background-image: ${gradientStyles.backgroundImage}\n}`;
  useEffect(() => {
    setGradientOutput(codeString);
  });

  return <div style={gradientStyles} className={styles.wrapper}></div>;
}

export default GradientPreview;
