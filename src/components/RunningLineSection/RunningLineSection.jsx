import React from "react";
import styles from "./RunningLineSection.module.css";

function RunningLineSection() {
  return (
    <section className={styles.runningLineSection}>
      <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
      <div className={styles.logosContainer}>
        <img src="./src/assets/img/solana.svg" alt="Solana" />
        <img src="./src/assets/img/arweave.svg" alt="Arweave" />
        <img src="./src/assets/img/bittensor.svg" alt="Bittensor" />
        <img src="./src/assets/img/logo4.svg" alt="Logo4" />
        <img src="./src/assets/img/telegram.svg" alt="Logo5" />
      </div>
    </section>
  );
}

export default RunningLineSection;
