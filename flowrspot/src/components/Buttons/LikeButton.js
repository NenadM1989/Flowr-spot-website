import React from "react";
import styles from "./LikeButton.css";

const LikeButton = () => {
  return (
    <div className={styles.favorite}>
      <i className="fa fa-star star"></i>
    </div>
  );
};

export default LikeButton;
