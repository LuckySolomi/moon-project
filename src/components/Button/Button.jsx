import React from "react";
import styles from "./Button.module.css";

function Button({ children, size = "md" }) {
  return (
    <button className={`${styles.button} ${styles[size]}`}>{children}</button>
  );
}

export default Button;
