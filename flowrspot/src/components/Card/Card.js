import React from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";
import LikeButton from "../Buttons/LikeButton";

const Card = ({ name, latinName, profilePicture, sightings, id }) => {
  //console.log(id);
  const navigateTo = useHistory();
  return (
    <div
      className={styles.card}
      onClick={() => navigateTo.push(`/flowerdetail/${id}`)}
    >
      <img src={profilePicture} alt="flower"></img>
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
