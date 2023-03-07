import React from "react";
import { IButtonProps } from "../../types/types";
import styles from "../Buttons/ReportButton.module.css";

const ReportButton = ({ children, color, background }: IButtonProps) => {
  return (
    <div className={styles["report-button"]}>
      <button style={{ color, background }} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default ReportButton;
