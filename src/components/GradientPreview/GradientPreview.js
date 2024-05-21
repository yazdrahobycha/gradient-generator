import React from "react";
import styles from "./gradient-preview.module.css";
import {createGradientBackground} from '../../helpers'

function GradientPreview({colors, angle, mode}) {
  const colorsEntries = colors.filter((colorEntry) => colorEntry.active).map((colorEntry) => colorEntry.color);
  const gradientStyles = createGradientBackground(colorsEntries, angle, mode);

  return <div style={gradientStyles} className={styles.wrapper}></div>;
}

export default GradientPreview;
