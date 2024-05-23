import React, { useContext } from "react";
import { AngleContext } from "../AngleProvider/AngleProvider";

function AngleContainer() {
  const { angle, handleAngleChange } = useContext(AngleContext);

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
        onChange={handleAngleChange}
      />
      <label htmlFor="angleSlider">Angle: {angle}deg</label>
    </div>
  );
}

export default AngleContainer;
