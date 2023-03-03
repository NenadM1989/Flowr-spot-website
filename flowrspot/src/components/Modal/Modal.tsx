import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "../../types/types";

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
