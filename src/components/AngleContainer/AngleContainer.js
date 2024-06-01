import React, { useContext } from "react";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";

function AngleContainer() {
  const { angle, handleAngleChange } = useContext(GradientDataContext);

  return (
    <div>
      <input
        style={{ width: "400px" }}
        type="range"
        id="angleSlider"
        name="angle"
        min="0"
        max="355"
        step="5"
        value={angle}
        onChange={(e) => handleAngleChange(e.target.value)}
      />
      <label htmlFor="angleSlider">Angle: {angle}deg</label>
    </div>
  );
}

export default AngleContainer;
