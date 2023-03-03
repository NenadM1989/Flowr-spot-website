import React, { ReactNode } from "react";
import styles from "../Buttons/ReportButton.module.css";

interface ButtonProps {
  children: ReactNode;
  color: string;
  background: string;
}

const ReportButton = ({ children, color, background }: ButtonProps) => {
  return (
    <div className={styles["report-button"]}>
      <button style={{ color, background }} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default ReportButton;
