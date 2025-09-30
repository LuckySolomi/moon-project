import React from "react";
import ButtonLink from "../ToolkitsComponents/ButtonLink/ButtonLink.jsx";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <ButtonLink href="#">LLM Leaderboard</ButtonLink>
        <Button size="sm">Buy Spice AI</Button>
      </div>
    </div>
  );
}

export default Header;
