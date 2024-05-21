import React, { useCallback } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { Plus, Trash } from "react-feather";
import styles from "./color-picker-container.module.css";

function ColorPickersContainer({ colors, setColors }) {
  const handleColorChange = useCallback((e, i) => {
    // we have to pull the newest state value manualy
    // beacause we're memoising this function in order to be able
    // to memoize ColorPicker component (because this function changes its referens every rerender we're
    //not able to memoize the component where it is as a prop), so it doesbt rerender every ColorPicker every time the
    // value of one ColorPicker color changes, and because this funct will never be updated ([] as param here)
    // it will have stale value. Now were both having function that is not changing its reference and the proper state
    setColors((currentArray) => {
      const newArray = [...currentArray];
      newArray[i].color = e.target.value;
      return newArray;
    });
  }, []);

  function handleActiveColor(i) {
    const activeColors = colors.filter((colorEntry) => colorEntry.active);
    // dont change active state if there will be less than two colors
    // and if the operation is delete (then the current value of active will be true, cause
    // we will want it to be false)
    if (activeColors.length <= 2 && colors[i].active) {
      return;
    }

    //change active state of the color
    const newArray = [...colors];
    newArray[i].active = !newArray[i].active;
    setColors(newArray);
  }
  return (
    <div className={styles.wrapper}>
      {colors.map((colorEntry, i) => {
        {
          /* we must pass the indexes of the colors in the state array
      to connect colorpicker and button actual implementation with its equivalent
    in state array  */
        }
        return (
          <div className={styles.picker_wrapper} key={colorEntry.id}>
            <ColorPicker
              disabled={!colorEntry.active}
              i={i}
              hadleColorChange={handleColorChange}
              color={colorEntry.color}
            />
            <button onClick={() => handleActiveColor(i)}>
              {colorEntry.active ? <Trash /> : <Plus />}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ColorPickersContainer;
