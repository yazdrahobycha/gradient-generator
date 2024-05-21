import React from "react";
import styles from "./modes-container.module.css";
const SUPPORTED_COLOR_MODES = ["lrgb", "hsl", "hsv", "hcl", "lab"];

function ModesContainer({ mode, setMode }) {
  return (
    <div className={styles.wrapper}>
      {SUPPORTED_COLOR_MODES.map((modeName, i) => {
        return (
          <div className={styles.radio_wrapper} key={i}>
            <input
              type="radio"
              name={modeName}
              id={modeName}
              value={modeName}
              checked={mode === modeName}
              onChange={(e) => setMode(e.target.value)}
            />
            <label htmlFor={modeName}>{modeName.toUpperCase()}</label>
          </div>
        );
      })}
    </div>
  );
}

export default ModesContainer;
