import React from "react";
import styles from "./gradient-preview.module.css";
import { createGradientBackground } from "../../helpers";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const codeString = `.element {\n    background-image: ${gradientStyles.backgroundImage}\n}`;
  return (
    <>
      <div style={gradientStyles} className={styles.wrapper}></div>
      <SyntaxHighlighter language="css" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}

export default GradientPreview;
