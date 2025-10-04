import React from "react";
("use client");
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import styles from "./RunningLineSection.module.css";

function RunningLineSection() {
  const { scrollYProgress } = useScroll();

  // рухаємо блок від translateX(100%) до translateX(-100%)
  const x = useTransform(scrollYProgress, [0.2, 0.7], ["100%", "-100%"]);
  return (
    <section className={styles.runningLineSection}>
      <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
      <motion.div className={styles.logosContainer} style={{ x }}>
        <img src="./src/assets/img/solana.svg" alt="Solana" />
        <img src="./src/assets/img/arweave.svg" alt="Arweave" />
        <img src="./src/assets/img/bittensor.svg" alt="Bittensor" />
        <img src="./src/assets/img/logo4.svg" alt="Logo4" />
        <img src="./src/assets/img/telegram.svg" alt="Logo5" />
      </motion.div>
    </section>
  );
}

export default RunningLineSection;
