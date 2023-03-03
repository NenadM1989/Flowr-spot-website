import React from "react";
import styles from "../Buttons/AddNewSightings.module.css";

const AddNewSightings = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles["button-add"]}>+ Add New Sighting</button>
    </div>
  );
};

export default AddNewSightings;
