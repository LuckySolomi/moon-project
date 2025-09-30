import React from "react";
import styles from "./ButtonLink.module.css";

function ButtonLink({ href, children, className = "" }) {
  return (
    <a href={href} className={`${styles.buttonLink} ${className}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
