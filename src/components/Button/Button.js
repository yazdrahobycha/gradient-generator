import React from "react";
import styles from "./button.module.css";

function Button({ children, isActive, ...rest }) {
  return (
    <button className={`${isActive ? styles.active : ""}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
