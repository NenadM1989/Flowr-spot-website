import React from "react";
import styles from "../Sightings/Sightings.module.css";
import AddNewSightings from "../../components/Buttons/AddNewSightings";
import image from "../../images/hero-sightings.png";
import CardSighting from "../../components/CardSighting/CardSighting";
const Sightings = () => {
  return (
    <div className={styles["sightings - container"]}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles["sighting-list"]}>
        <div className={styles["sightings-text"]}>
          <p className={styles.p1}>Sighting list</p>
          <p className={styles.p2}>Explore between more than 8.427 sightings</p>
        </div>
        <div className={styles["sightings-button"]}>
          <AddNewSightings />
        </div>
      </div>
      <CardSighting />
    </div>
  );
};

export default Sightings;
