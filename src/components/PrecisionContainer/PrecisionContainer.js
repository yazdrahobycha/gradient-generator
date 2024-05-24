import React, { useContext } from "react";
import { PrecisionContext } from "../PrecisionProvider/PrecisionProvider";
import { DEFAULT_PRECISION_RANGE } from "../../constants";

function PrecisionContainer() {
  const { precision, handlePrecisionChange } = useContext(PrecisionContext);
  return (
    <div>
      <input
        style={{ width: "400px" }}
        type="range"
        id="precisionSlider"
        name="precision"
        min={DEFAULT_PRECISION_RANGE[0]}
        max={DEFAULT_PRECISION_RANGE[1]}
        step="1"
        value={precision}
        onChange={handlePrecisionChange}
      />
      <label htmlFor="precisionSlider">{precision}</label>
    </div>
  );
}

export default PrecisionContainer;
