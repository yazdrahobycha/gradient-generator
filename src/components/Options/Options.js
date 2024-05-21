import React from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";

function Options({ colors, angle, setColors, setAngle, mode, setMode }) {
  return (
    <div className={styles.options}>
      <ColorPickersContainer colors={colors} setColors={setColors} />
      <ModesContainer mode={mode} setMode={setMode} />
    </div>
  );
}

export default Options;
