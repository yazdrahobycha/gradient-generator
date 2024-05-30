import React, { useContext, useEffect } from "react";
import styles from "./gradient-preview.module.css";
import { createGradientBackground } from "../../helpers";
// variablesfrom relevant contexts needed for for createGradientBackground function
import { ColorsContext } from "../ColorsProvider/ColorsProvider";
import { ModeContext } from "../ModeProvider/ModeProvider";
import { AngleContext } from "../AngleProvider/AngleProvider";
import { PrecisionContext } from "../PrecisionProvider/PrecisionProvider";
import { BezierContext } from "../BezierProvider/BezierProvider";

import { useGradientData } from "../GradientDataProvider/GradientDataProvider";

function GradientPreview() {
  const { getCssOutput, getOptionsfromUrl } = useGradientData();
  console.log("GradientPreview rerendering!!");

  useEffect(() => {
    getOptionsfromUrl();
  }, []);

  return <div style={getCssOutput()} className={styles.wrapper}></div>;
}

export default GradientPreview;
