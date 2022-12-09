import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import flower from "../../images/pl-image.png";
import LikeButton from "../Buttons/LikeButton";

const Card = () => {
  return (
    <div className={styles.Card}>
      <Link to="/flowerdetail">
        <img src={flower} alt="flower"></img>
      </Link>
      <div className={styles["like-button"]}>
        <LikeButton />
      </div>
    </div>
  );
};

export default Card;
