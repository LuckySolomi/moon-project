import React from "react";
import { tableData } from "../../data/tableData.js";
import TableRow from "../ToolkitsComponents/TableRow/TableRow";
import Button from "../ToolkitsComponents/Button/Button.jsx";
import ButtonLink from "../ToolkitsComponents/ButtonLink/ButtonLink.jsx";
import styles from "./TableSection.module.css";

function TableSection() {
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
      <div>
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
        {tableData.map((row, index) => (
          <TableRow
            key={row.id}
            rank={index + 1}
            {...row}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      <div className={styles.tableSectionButtonContainer}>
        <ButtonLink href="#">View more</ButtonLink>
      </div>
    </section>
  );
}

export default TableSection;
