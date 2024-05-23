import React, { useState } from "react";
import styles from "./options.module.css";
import ColorPickersContainer from "../ColorPickersContainer/ColorPickersContainer";
import ModesContainer from "../ModesContainer/ModesContainer";
import AngleContainer from "../AngleContainer/AngleContainer";
import PrecisionContainer from "../PrecisionContainer/PrecisionContainer";
import BezierContainer from "../BezierContainer/BezierContainer";

function Options({
  setBezierParams,
  bezierParam,
  precision,
  setPrecision,
}) {
  return (
    <div className={styles.options}>
      <ColorPickersContainer />
      <ModesContainer />
      <AngleContainer />
      <PrecisionContainer precision={precision} setPrecision={setPrecision} />
      <BezierContainer
        setBezierParams={setBezierParams}
        bezierParam={bezierParam}
      />
    </div>
  );
}

export default Options;
