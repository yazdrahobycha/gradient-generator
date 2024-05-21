import React, { useState } from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";
import ModesContainer from "../ModesContainer/ModesContainer";
import AngleContainer from "../AngleContainer/AngleContainer";
import "react-bezier-curve-editor/lib/index.css";
import { BezierCurveEditor } from "react-bezier-curve-editor";

function Options({
  colors,
  angle,
  setColors,
  setAngle,
  mode,
  setMode,
  setBezierParams,
  bezierParam,
}) {
  return (
    <div className={styles.options}>
      <ColorPickersContainer colors={colors} setColors={setColors} />
      <ModesContainer mode={mode} setMode={setMode} />
      <AngleContainer angle={angle} setAngle={setAngle} />
      <div style={{ width: "500px" }}>
        <BezierCurveEditor
          value={bezierParam}
          onChange={(bezier) => {
            setBezierParams(bezier);
          }}
        />
      </div>
    </div>
  );
}

export default Options;
