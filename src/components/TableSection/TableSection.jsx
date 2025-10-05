import React, { useState } from "react";
import { tableData } from "../../data/tableData.js";
import TableRow from "../ToolkitsComponents/TableRow/TableRow";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import ButtonLink from "../ToolkitsComponents/ButtonLink/ButtonLink.jsx";
import ArrowIcon from "../ToolkitsComponents/ArrowIcon/ArrowIcon.jsx";
import RocketIcon from "../../assets/img/rocket.svg";
import styles from "./TableSection.module.css";

function TableSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? tableData : tableData.slice(0, 10);

  const [launchRocket, setLaunchRocket] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
    setLaunchRocket(true);
    // зупинити анімацію після завершення (щоб можна було повторити)
    setTimeout(() => setLaunchRocket(false), 4000); // — тривалість анімації
  };

  return (
    <section>
      <div className={styles.tableSectionTitleContainer}>
        <h2>LLM Leaderboard</h2>
        <Button size="lg">Submit your model</Button>
      </div>
      <p className={styles.tableSectionText}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
      <div className={styles.tableSectionTableContainer}>
        {/* Заголовок */}
        <TableRow
          isHeader
          rank="#"
          name="Model Name"
          indicators={[
            "Average",
            "ARC",
            "HellaSwag",
            "MMLU",
            "TruthfulQA",
            "Winogrande",
            "GSM8K",
          ]}
          usage="Usage"
        />

        {/* Рядки */}
        {visibleData.map((row, index) => (
          <TableRow
            key={row.id}
            rank={index + 1}
            {...row}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      {launchRocket && (
        <img src={RocketIcon} alt="Rocket" className={styles.rocket} />
      )}

      <div className={styles.tableSectionButtonContainer}>
        <ButtonLink onClick={handleToggle}>
          {showAll ? "View less" : "View more"}
        </ButtonLink>
        <ArrowIcon rotated={!showAll} onClick={handleToggle} />
      </div>
    </section>
  );
}

export default TableSection;
