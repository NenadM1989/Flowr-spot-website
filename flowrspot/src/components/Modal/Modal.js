import React from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div></div>
    </div>
  );
};

export default Modal;
