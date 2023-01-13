import React from "react";
import styles from "../Buttons/ReportButton.module.css";

const ReportButton = ({ children, color, background }) => {
  console.log(color);
  return (
    <div className={styles["report-button"]}>
      <button
        style={{ color: color, background: background }}
        className={styles.button}
      >
        {children}
      </button>
    </div>
  );
};

export default ReportButton;
