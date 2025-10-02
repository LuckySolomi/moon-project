import React from "react";
import { motion } from "framer-motion";
import NumberCard from "../NumberCard/NumberCard";
import styles from "./NumberCardSection.module.css";

const cards = [
  { number: "10,873", text: "LLM models" },
  { number: "$72,470,728", text: "paid to data scientists" },
  { number: "6,557", text: "members" },
];

export default function NumberCardSection() {
  return (
    <section className={styles.numberCardSection}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: i * 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <NumberCard number={card.number} text={card.text} />
        </motion.div>
      ))}
    </section>
  );
}
