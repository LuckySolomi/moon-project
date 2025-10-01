import React from "react";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import styles from "./Main.module.css";

function Main() {
  return (
    <div>
      <section>
        <h1 className={styles.gradientText}>
          A new economic primitive for funding decentralized AI
        </h1>
        <p className={styles.initialSectionText}>
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <Button size="lg" className={styles.initialSectionButton}>
          Buy Spice AI
        </Button>
      </section>
    </div>
  );
}

export default Main;
