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
import JoinSection from "./components/JoinSection/JoinSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
        <div ref={numberSectionRef}>
          <NumberCardSection />
        </div>
        <RunningLineSection />
        <div ref={descriptionRef}>
          <DescriptionSection isVisible={isDescriptionInView} />
        </div>
        <TableSection />
        <JoinSection />
      </main>
      <div className={styles.appJoinText}>
        <p>Join our community and harvest $SALT</p>
      </div>

      <Footer />
      <img
        src="/src/assets/img/nasa.svg"
        alt="background"
        className={styles.nasaBackground}
      />
    </div>
  );
}

export default App;
