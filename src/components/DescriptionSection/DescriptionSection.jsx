import React from "react";
import { useState, useEffect } from "react";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import comet from "../../assets/img/comet.svg";
import styles from "./DescriptionSection.module.css";

function DescriptionSection({ isVisible }) {
  const [animateComet, setAnimateComet] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isVisible) {
      setAnimateComet(true); // стартує перший політ
      intervalId = setInterval(() => {
        setAnimateComet(false); // коротко вимикаємо
        setTimeout(() => setAnimateComet(true), 100); // знову запускаємо через 0.1с
      }, 7000); // кожні 7 секунд новий політ
    } else {
      setAnimateComet(false); // якщо секція вийшла з поля зору — вимикаємо
    }

    return () => clearInterval(intervalId); // очищення
  }, [isVisible]);
  return (
    <section className={styles.descriptionSection}>
      {animateComet && <img src={comet} alt="comet" className={styles.comet} />}
      <div className={styles.descriptionSectionContainer}>
        <h2>Crowdsourcing our collective intelligence to build the best AI</h2>
        <p className={styles.descriptionSectionText}>
          Open source AIs have been lagging in development behind OpenAI with
          billions of dollars.We run competitions between AI models to find and
          pay for the best AI model. Users will be able to access the best AI
          models.
        </p>
        <div className={styles.descriptionSectionButton}>
          <Button size="md">Use the cutting edge AI</Button>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
