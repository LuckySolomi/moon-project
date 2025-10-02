import React from "react";
import BackgroundElements from "./components/BackgroundElements/BackgroundElements";
import Header from "./components/Header/Header";
import InitialSection from "./components/InitialSection/InitialSection.jsx";
import NumberCardSection from "./components/NumberCardSection/NumberCardSection.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BackgroundElements />
      <Header />
      <main>
        <InitialSection />
        <NumberCardSection />
      </main>
    </div>
  );
}

export default App;
