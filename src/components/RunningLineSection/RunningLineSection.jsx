import React from "react";
import styles from "./RunningLineSection.module.css";

function RunningLineSection() {
  return (
    <section className={styles.runningLineSection}>
      <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
      <div className={styles.logosContainer}>
        <img src="solana.svg" alt="Solana" />
        <img src="arweave.svg" alt="Arweave" />
        <img src="bittensor.svg" alt="Bittensor" />
        <img src="logo4.svg" alt="Logo4" />
        <img src="telegram.svg" alt="Logo5" />
      </div>
    </section>
  );
}

export default RunningLineSection;
