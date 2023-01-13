import React from "react";
import styles from "../Buttons/AddCommentButton.module.css";

const AddCommentButton = ({ color }) => {
  return (
    <div className={styles.comment[color]}>
      <button className={styles.button}>Add Comment</button>
    </div>
  );
};

export default AddCommentButton;
