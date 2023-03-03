import React from "react";
import styles from "../Warning/Warning.module.css";

const Warning = () => {
  return (
    <div className={styles.border}>
      <span className={styles.header}>
        Flower with specific name doesnt exist!
      </span>
    </div>
  );
};

export default Warning;
