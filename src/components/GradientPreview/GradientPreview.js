import React, { useContext } from "react";
import styles from "./gradient-preview.module.css";
import { createGradientBackground } from "../../helpers";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ColorsContext } from "../ColorsProvider/ColorsProvider";
import { ModeContext } from "../ModeProvider/ModeProvider";
import { AngleContext } from "../AngleProvider/AngleProvider";

function GradientPreview({ bezierParam, precision }) {
  const { getActiveColors } = useContext(ColorsContext);
  const { mode } = useContext(ModeContext);
  const { angle } = useContext(AngleContext);

  const colorsEntries = getActiveColors();
  const gradientStyles = createGradientBackground(
    colorsEntries,
    angle,
    mode,
    bezierParam,
    precision
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
