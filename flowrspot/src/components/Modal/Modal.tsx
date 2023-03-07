import React from "react";
import styles from "./Modal.module.css";
import { IModalProps } from "../../types/types";

const Modal = ({ children, onClose }: IModalProps) => {
  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
