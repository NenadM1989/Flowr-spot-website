import React from "react";
import styles from "../Buttons/WhiteReportButton.module.css"

const WhiteReportButton = () => {
  return (
    <div className={styles["report-button"]}>
      <button className={styles.button}>Report</button>
    </div>
  );
};

export default WhiteReportButton;
