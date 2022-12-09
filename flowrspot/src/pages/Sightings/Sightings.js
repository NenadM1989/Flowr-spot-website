import React from "react";
import styles from "../Sightings/Sightings.module.css";
import AddNewSightings from "../../components/Buttons/AddNewSightings";

const Sightings = () => {
  return (
    <div className={styles["sightings - container"]}>
      <div className={styles["sightings-top"]}>
        <div className={styles["sightings-content"]}>
          <div className={styles["sightings-title"]}>
            <p className={`${styles.paragraph} ${styles["first-paragraph"]}`}>
              Sighting List
            </p>
          </div>
          <div className={styles["button-add"]}>
            <AddNewSightings />
          </div>
        </div>
        <div className={styles["sightings-explore"]}>
          <p className={`${styles.paragraph} ${styles["second-paragraph"]}`}>
            Explore between 8,427 sightings
          </p>
        </div>
      </div>
      <div></div>
      <div className={styles["sighting-button"]}>
        <AddNewSightings />
      </div>
    </div>
  );
};

export default Sightings;
