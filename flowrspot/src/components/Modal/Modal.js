import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
