import React, { useContext } from "react";
import styles from "./gradient-preview.module.css";
// variablesfrom relevant contexts needed for for createGradientBackground function

import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";

function GradientPreview() {
  const { getCssOutput } = useContext(GradientDataContext);

  return <div style={getCssOutput()} className={styles.wrapper}></div>;
}

export default GradientPreview;
