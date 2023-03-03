import React from "react";
import styles from "./LikeButton.module.css";

const LikeButton = () => {
  const handleClick = () => {
    console.log("Click occurred!");
  };
  return (
    <>
      <div className={styles.favorite} onClick={handleClick}>
        <i className={`${styles.fa} ${styles["fa-star"]} ${styles.star}`}></i>
      </div>
    </>
  );
};

export default LikeButton;
