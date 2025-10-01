import React from "react";
import BackgroundElements from "./components/BackgroundElements/BackgroundElements";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BackgroundElements />
      <Header />
      <Main />
    </div>
  );
}

export default App;
