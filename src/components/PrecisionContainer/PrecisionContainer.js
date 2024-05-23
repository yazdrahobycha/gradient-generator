import React from "react";

function PrecisionContainer({ precision, setPrecision }) {
  return (
    <div>
      <input
        style={{ width: "400px" }}
        type="range"
        id="precisionSlider"
        name="precision"
        min="1"
        max="20"
        step="1"
        value={precision}
        onChange={(e) => setPrecision(e.target.value)}
      />
      <label htmlFor="precisionSlider">{precision}</label>
    </div>
  );
}

export default PrecisionContainer;
