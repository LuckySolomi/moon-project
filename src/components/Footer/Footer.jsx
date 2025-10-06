import React from "react";
import ButtonLink from "../ToolkitsComponents/ButtonLink/ButtonLink.jsx";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerButtonContainer}>
        <ButtonLink>How It Works</ButtonLink>
        <ButtonLink>Buy Salt AI</ButtonLink>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerIconsContainer}>
          <img src="telegram.svg" alt="telegram" />
          <img src="x-icon.svg" alt="x-icon" />
        </div>
        <nav className={styles.footerNavContainer}>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
