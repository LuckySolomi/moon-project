import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BackgroundElements from "./components/BackgroundElements/BackgroundElements";
import Header from "./components/Header/Header";
import InitialSection from "./components/InitialSection/InitialSection.jsx";
import NumberCardSection from "./components/NumberCardSection/NumberCardSection.jsx";
import RunningLineSection from "./components/RunningLineSection/RunningLineSection.jsx";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection.jsx";
import TableSection from "./components/TableSection/TableSection.jsx";
import styles from "./App.module.css";

function App() {
  const numberSectionRef = useRef(null);
  const isNumberSectionInView = useInView(numberSectionRef, { threshold: 0.3 });

  const descriptionRef = useRef(null);
  const isDescriptionInView = useInView(descriptionRef, { threshold: 0.3 });
  return (
    <div className={styles.app}>
      <BackgroundElements />
      <Header />
      <main>
        <InitialSection gradientChanged={isNumberSectionInView} />
        <NumberCardSection ref={numberSectionRef} />
        <RunningLineSection />
        <div ref={descriptionRef}>
          <DescriptionSection isVisible={isDescriptionInView} />
        </div>
        <TableSection />
      </main>
    </div>
  );
}

export default App;
