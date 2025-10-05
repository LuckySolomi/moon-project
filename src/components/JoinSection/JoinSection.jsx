import React from "react";
import styles from "./JoinSection.module.css";

function JoinSection() {
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
          <img src="./src/assets/img/telegram.svg" alt="telegram" />
          <img src="./src/assets/img/x-icon.svg" alt="x-icon" />
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
