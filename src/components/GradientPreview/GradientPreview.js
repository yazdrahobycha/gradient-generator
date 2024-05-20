import React from "react";
import styles from "./gradient-preview.module.css";
import {createGradientBackground} from '../../helpers'

function GradientPreview({colors, angle}) {
  const gradientStyles = createGradientBackground(colors, angle)
  console.log(gradientStyles)


  return <div style={gradientStyles} className={styles.wrapper}></div>;
}

export default GradientPreview;
