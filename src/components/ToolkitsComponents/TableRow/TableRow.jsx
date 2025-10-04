import React from "react";
import minusIcon from "../../../assets/img/minus.svg";
import upIcon from "../../../assets/img/up-arrow.svg";
import downIcon from "../../../assets/img/down-arrow.svg";
import styles from "./TableRow.module.css";

function TableRow({
  rank,
  name,
  indicators,
  usage,
  growth,
  isEven,
  isHeader = false,
}) {
  const getIcon = () => {
    if (isHeader) return null;
    if (growth === "up") return upIcon;
    if (growth === "down") return downIcon;
    return minusIcon;
  };
  return (
    <div
      className={`${styles.tableRow} ${isEven ? styles.tableRowEven : ""} ${
        isHeader ? styles.tableRowHeader : ""
      }`}
    >
      {/* Ліва частина */}
      <div className={styles.tableRowNamerContainer}>
        <div className={styles.tableRowSignsContainer}>
          {isHeader ? (
            <span style={{ width: 20 }}></span>
          ) : (
            <img src={getIcon()} alt="icon" />
          )}
          <span>{rank}</span>
        </div>
        <span className={styles.modelName}>{name}</span>
      </div>

      {/* Права частина */}
      <div className={styles.tableRowNumberContainer}>
        <div className={styles.indicatorsContainer}>
          {indicators.map((value, i) => (
            <span key={i}>{value}</span>
          ))}
          <span className={styles.usage}>{usage}</span>
        </div>
        <span className={`${styles.usage} ${styles.mobileOnly}`}>{usage}</span>
      </div>
    </div>
  );
}

export default TableRow;
