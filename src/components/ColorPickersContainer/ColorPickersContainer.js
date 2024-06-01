import React, { useCallback, useContext } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./color-picker-container.module.css";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";

function ColorPickersContainer() {
  const { colors } = useContext(GradientDataContext);

  return (
    <div className={styles.wrapper}>
      {colors.map((colorEntry, i) => {
        {
          /* we must pass the indexes of the colors in the state array
      to connect colorpicker and button actual implementation with its equivalent
    in state array  */
        }
        return (
          <div key={colorEntry.id}>
            <ColorPicker
              passedIsActive={colorEntry.active}
              indexInColorsArray={i}
              passedColor={colorEntry.color}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ColorPickersContainer;
