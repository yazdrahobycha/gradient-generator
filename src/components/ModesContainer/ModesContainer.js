import React, { useContext } from "react";
import styles from "./modes-container.module.css";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";
import { SUPPORTED_COLOR_MODES } from "../../constants";

function ModesContainer() {
  const { mode, handleModeChange } = useContext(GradientDataContext);

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
              onChange={(e) => handleModeChange(e.target.value)}
            />
            <label htmlFor={modeName}>{modeName.toUpperCase()}</label>
          </div>
        );
      })}
    </div>
  );
}

export default ModesContainer;
