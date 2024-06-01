import React, { memo, useContext } from "react";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";
import style from "../ColorPickersContainer/color-picker-container.module.css";
import { Plus, Trash } from "react-feather";

function ColorPicker({ passedColor, indexInColorsArray, passedIsActive }) {
  const { handleColorChange, handleActiveColor } =
    useContext(GradientDataContext);

  const Icon = passedIsActive ? Trash : Plus;

  return (
    <div className={style.picker_wrapper}>
      <input
        disabled={!passedIsActive}
        type="color"
        id="head"
        name="head"
        value={passedColor}
        onChange={(e) => handleColorChange(e, indexInColorsArray)}
      />
      <button onClick={() => handleActiveColor(indexInColorsArray)}>
        <Icon />
      </button>
    </div>
  );
}

export default memo(ColorPicker);
