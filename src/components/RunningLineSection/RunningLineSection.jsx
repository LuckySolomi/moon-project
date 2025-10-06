import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./RunningLineSection.module.css";

function RunningLineSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  return (
    <section className={styles.runningLineSection} ref={sectionRef}>
      <h2>Projects integrated into the Arrakis AI Ecosystem</h2>

      <motion.div
        className={styles.logosContainer}
        initial={{ x: "100%" }}
        animate={isInView ? { x: "0%" } : { x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src="solana.svg" alt="Solana" />
        <img src="arweave.svg" alt="Arweave" />
        <img src="bittensor.svg" alt="Bittensor" />
        <img className={styles.roundIcons} src="logo4.svg" alt="Logo4" />
        <img className={styles.roundIcons} src="telegram.svg" alt="Logo5" />
      </motion.div>
    </section>
  );
}

export default RunningLineSection;
