import React from "react";
import styles from "./NumberCard.module.css";

function NumberCard({ number, text }) {
  return (
    <div className={styles.numberCardContainer}>
      <span className={styles.cardNumber}>{number}</span>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}

export default NumberCard;
