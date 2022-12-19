import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import flower from "../../images/pl-image.png";
import LikeButton from "../Buttons/LikeButton";

const Card = () => {
  return (
    <div className={styles.card}>
      <Link to="/flowerdetail">
        <img src={flower} alt="flower"></img>
      </Link>
      <div className={styles["like-button"]}>
        <LikeButton />
      </div>
      <div className={styles["flower-description"]}>
        <div className={styles["flower-name"]}>
          <h3>Ballon Flower</h3>
        </div>
        <div className={styles["latin-name"]}>
          <p>Platycodon grandiflorus</p>
        </div>
        <div className={styles.sightings}>
          <p className={styles.paragraph}>127 sightings</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
