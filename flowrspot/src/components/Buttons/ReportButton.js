import React from "react";
import styles from "../Buttons/ReportButton.module.css";

const ReportButton = () => {
  return (
    <div className={styles["report-button"]}>
      <button className={styles.button}>Report</button>
    </div>
  );
};

export default ReportButton;
