import React, { memo, useContext } from "react";
import { ColorsContext } from "../ColorsProvider/ColorsProvider";

function ColorPicker({
  passedColor,
  indexInColorsArray,
  passedIsActive,
  ...rest
}) {
  //console.log(useContext(ColorsContext));
  const { handleColorChange } = useContext(ColorsContext);
  console.log(indexInColorsArray + " color picker rerendering");
  return (
    <div>
      <input
        {...rest}
        type="color"
        id="head"
        name="head"
        value={passedColor}
        onChange={(e) => handleColorChange(e, indexInColorsArray)}
      />
    </div>
  );
}

export default memo(ColorPicker);
