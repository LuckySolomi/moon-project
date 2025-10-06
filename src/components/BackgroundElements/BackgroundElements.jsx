import React from "react";
import { useEffect, useState } from "react";
import blueShadow from "../../assets/img/blue-shadow.svg";
import redShadow from "../../assets/img/red-shadow.svg";
import moonImg from "../../assets/img/half-moon.svg";
import styles from "./BackgroundElements.module.css";

function BackgroundElements() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.backgroundElementsContainer}>
      <img
        src={blueShadow}
        alt=""
        className={`${styles.img} ${styles.blueShadow}`}
        style={{ transform: `translateY(${-offset * 0.4}px)` }}
      />
      <img
        src={redShadow}
        alt=""
        className={`${styles.img} ${styles.redShadow}`}
        style={{
          transform: `translateY(${-offset * 0.5}px)`,
        }}
      />
      <img
        src={moonImg}
        alt=""
        className={`${styles.img} ${styles.halfMoon}`}
        style={{ transform: `translateY(${-offset * 0.5}px)` }}
      />
    </div>
  );
}

export default BackgroundElements;
