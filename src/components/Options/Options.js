import React, { useState } from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";
import ModesContainer from "../ModesContainer/ModesContainer";
import AngleContainer from "../AngleContainer/AngleContainer";
import PrecisionContainer from "../PrecisionContainer/PrecisionContainer";
import BezierContainer from "../BezierContainer/BezierContainer";

function Options() {
  return (
    <div className={styles.options}>
      <BezierContainer />
      <ColorPickersContainer />
      <ModesContainer />
      <AngleContainer />
      <PrecisionContainer />
    </div>
  );
}

export default Options;
