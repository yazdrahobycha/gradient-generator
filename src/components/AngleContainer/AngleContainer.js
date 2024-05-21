import React from "react";

function AngleContainer({ angle, setAngle }) {
  return (
    <div>
      <input
        style={{ width: "400px" }}
        type="range"
        id="angle"
        name="angle"
        min="0"
        max="355"
        step="5"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />
      <label htmlFor="angleSlider">Angle: {angle}deg</label>
    </div>
  );
}

export default AngleContainer;
