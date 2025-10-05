import React from "react";
import styles from "./ButtonLink.module.css";

function ButtonLink({ onClick, children, className = "" }) {
  return (
    <button onClick={onClick} className={`${styles.buttonLink} ${className}`}>
      {children}
    </button>
  );
}

export default ButtonLink;
