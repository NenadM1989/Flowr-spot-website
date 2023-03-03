import React from "react";
import styles from "./LikeButton.module.css";

const LikeButton = () => {
  return (
    <>
      <div className={styles.favorite}>
        <i className={`${styles.fa} ${styles["fa-star"]} ${styles.star}`}></i>
      </div>
    </>
  );
};

export default LikeButton;
