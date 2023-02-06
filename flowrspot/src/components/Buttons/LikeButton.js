import React from "react";
import styles from "./LikeButton.css";

const LikeButton = () => {
  const handleClick = () => {
    console.log("Click occurred!");
  };
  return (
    <>
      <div className={styles.favorite} onClick={handleClick}>
        <i className="fa fa-star star"></i>
      </div>
    </>
  );
};

export default LikeButton;
