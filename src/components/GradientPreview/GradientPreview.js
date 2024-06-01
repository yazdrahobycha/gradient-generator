import React, { useContext } from "react";
import styles from "./gradient-preview.module.css";
// variablesfrom relevant contexts needed for for createGradientBackground function

import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";

function GradientPreview() {
  const { getCssOutput } = useContext(GradientDataContext);
  console.log("GradientPreview rerendering!!");

  return <div style={getCssOutput()} className={styles.wrapper}></div>;
}

export default GradientPreview;
