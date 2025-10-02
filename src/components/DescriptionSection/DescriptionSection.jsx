import React from "react";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import styles from "./DescriptionSection.module.css";

function DescriptionSection() {
  return (
    <section className={styles.descriptionSection}>
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
    </section>
  );
}

export default DescriptionSection;
