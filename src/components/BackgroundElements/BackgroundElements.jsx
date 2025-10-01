import React from "react";
import { useEffect, useState } from "react";
import styles from "./BackgroundElements.module.css";
import blueShadow from "../../assets/img/blue-shadow.svg";
import redShadow from "../../assets/img/red-shadow.svg";
import moonImg from "../../assets/img/half-moon.svg";

function BackgroundElements() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={blueShadow}
        alt=""
        className={`${styles.img} ${styles.blue}`}
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      />
      <img
        src={redShadow}
        alt=""
        className={`${styles.img} ${styles.red}`}
        style={{ transform: `translateY(${offset * 0.6}px)` }}
      />
      <img
        src={moonImg}
        alt=""
        className={`${styles.img} ${styles.moon}`}
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      />
    </div>
  );
}

export default BackgroundElements;
