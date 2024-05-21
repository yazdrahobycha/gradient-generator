import React, { memo, useState } from "react";

function ColorPicker({ color, hadleColorChange, i, ...rest }) {
  return (
    <div>
      <input
        {...rest}
        type="color"
        id="head"
        name="head"
        value={color}
        onChange={(e) => hadleColorChange(e, i)}
      />
    </div>
  );
}

export default memo(ColorPicker);
