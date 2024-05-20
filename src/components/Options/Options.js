import React from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";

function Options({ colors, angle, setColors, setAngle }) {
  return (
    <div className={styles.options}>
      <ColorPickersContainer colors={colors} setColors={setColors} />
    </div>
  );
}

export default Options;
