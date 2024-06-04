import React, { useState } from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";
import ModesContainer from "../ModesContainer/ModesContainer";
import AngleContainer from "../AngleContainer/AngleContainer";
import PrecisionContainer from "../PrecisionContainer/PrecisionContainer";
import BezierContainer from "../BezierContainer/BezierContainer";
import RandomizeButton from "../RandomizeButton/RandomizeButton";

function Options() {
  return (
    <div className={styles.options}>
      <RandomizeButton/>
      <BezierContainer />
      <ColorPickersContainer />
      <ModesContainer />
      <AngleContainer />
      <PrecisionContainer />
    </div>
  );
}

export default Options;
