import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import LikeButton from "../Buttons/LikeButton";

const Card = ({ name, latinName, profilePicture, sightings }) => {
  return (
    <div className={styles.card}>
      <Link to="/flowerdetail">
        <img src={profilePicture} alt="flower"></img>
      </Link>
      <div className={styles["like-button"]}>
        <LikeButton />
      </div>
      <div className={styles["flower-description"]}>
        <div className={styles["flower-name"]}>
          <h3>{name}</h3>
        </div>
        <div className={styles["latin-name"]}>
          <p className={styles.latin}>{latinName}</p>
        </div>
        <div className={styles.sightings}>
          <p className={styles.paragraph}>{sightings} sightings</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
