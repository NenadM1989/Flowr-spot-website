import React from "react";
import styles from "../SightingList/SightingList.module.css";
import AddNewSightings from "../Buttons/AddNewSightings.js";

const SightingList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>Sighting List</h2>
        <h3 className={styles.h3}>Explore between more than 8,427 sightings</h3>
        <AddNewSightings className={styles.button} />
      </div>
    </div>
  );
};

export default SightingList;
