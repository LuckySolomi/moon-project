import React from "react";
import styles from "./Button.module.css";

function Button({ children, size = "md", className }) {
  /*<Button size="sm">Buy Spice AI</Button>
      <Button size="md">Use the cutting edge AI</Button>
      <Button size="lg">Large</Button> */
  return (
    <button className={`${styles.button} ${styles[size]} ${className || ""}`}>
      {children}
    </button>
  );
}

export default Button;
