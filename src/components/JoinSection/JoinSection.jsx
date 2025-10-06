import React from "react";
import { useEffect, useState } from "react";
import styles from "./JoinSection.module.css";

function JoinSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className={styles.joinSection}>
      <div className={styles.joinSectionContainer}>
        <h2>Join our community</h2>
        <p className={styles.joinSectionText}>
          Join us on our mission to to the moon & revolutionize open source AI
          development so that we can build a permissionless, democratized, and
          decentralized AI.
        </p>
        <p className={styles.joinSectionTextNote}>
          Let the fate of AI be in our hands and not that of big tech companies.
        </p>
        <div className={styles.joinSectionIconsContainer}>
          <img src="telegram.svg" alt="telegram" />
          <img src="x-icon.svg" alt="x-icon" />
        </div>
      </div>
      <img
        src="round-moon.svg"
        alt="moon"
        className={styles.roundMoon}
        style={{ transform: `translateY(${offsetY}px)` }}
      />
    </section>
  );
}

export default JoinSection;
