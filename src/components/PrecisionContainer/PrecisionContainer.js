import React, { useContext } from "react";
import { PrecisionContext } from "../PrecisionProvider/PrecisionProvider";

function PrecisionContainer() {
  const { precision, handlePrecisionChange } = useContext(PrecisionContext);
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
        onChange={handlePrecisionChange}
      />
      <label htmlFor="precisionSlider">{precision}</label>
    </div>
  );
}

export default PrecisionContainer;
