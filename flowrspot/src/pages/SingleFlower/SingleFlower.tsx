import React from "react";
import styles from "../../pages/SingleFlower/SingleFlower.module.css";
import flower from "../../images/pl-image.png";

const SingleFlower = () => {
  return (
    <>
      <div className={styles["info-background"]}>
        <img src={flower} alt="flower" className={styles["info-pic"]} />
        <div className={"info-data"}>
          <div className={styles["info-like"]}>
            <div className={styles["info-star"]}></div>
            <div className={styles["info-sightings"]}></div>
          </div>
          <h1 className={styles["info-name"]}>St. Anthony Tulip</h1>
          <h3 className={styles["info-latin-name"]}>Ranuculus experimentis</h3>
        </div>
        <button>+Add New Sighting</button>
      </div>
      ;
    </>
  );
};

export default SingleFlower;
