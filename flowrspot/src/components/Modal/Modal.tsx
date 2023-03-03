import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
