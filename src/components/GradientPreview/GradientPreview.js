import React from "react";
import styles from "./gradient-preview.module.css";
import { createGradientBackground } from "../../helpers";

function GradientPreview({ colors, angle, mode, bezierParam }) {
  // create an array with color enries that only have active: true property
  const colorsEntries = colors
    .filter((colorEntry) => colorEntry.active)
    .map((colorEntry) => colorEntry.color);
  const gradientStyles = createGradientBackground(
    colorsEntries,
    angle,
    mode,
    bezierParam
  );

  return <div style={gradientStyles} className={styles.wrapper}></div>;
}

export default GradientPreview;
