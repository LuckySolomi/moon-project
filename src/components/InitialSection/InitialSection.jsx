import React from "react";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import ButtonLink from "../ToolkitsComponents/ButtonLink/ButtonLink.jsx";
import styles from "./InitialSection.module.css";

function InitialSection({ gradientChanged }) {
  return (
    <section className={styles.initialSection}>
      <h1
        className={`${styles.gradientText} ${
          gradientChanged ? styles.gradientTextChanged : ""
        }`}
      >
        A new economic primitive for funding decentralized AI
      </h1>
      <p className={styles.initialSectionText}>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </p>
      <div className={styles.initialSectionButtonContainer}>
        <Button size="lg">Buy Spice AI</Button>
        <ButtonLink>Try Now</ButtonLink>
      </div>
    </section>
  );
}

export default InitialSection;
