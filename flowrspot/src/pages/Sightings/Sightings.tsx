import React, { useState, useEffect } from "react";
import styles from "../Sightings/Sightings.module.css";
//import AddNewSightings from "../../components/Buttons/AddNewSightings";
import image from "../../images/hero-sightings.png";
import CardSighting from "../../components/CardSighting/CardSighting";
import { RandomFlowerList } from "../../services/services";
const Sightings = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    RandomFlowerList.getFlowers()
      .then((data) => setFlowers(data.data.flowers))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles["sightings - container"]}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles["sighting-list"]}>
        <div className={styles["sightings-text"]}>
          <p className={styles.p1}>Sighting list</p>
          <p className={styles.p2}>Explore between more than 8.427 sightings</p>
        </div>
        <button className={styles.button}>+Add New Sighting</button>
      </div>
      <div className={styles["cardsight-list"]}>
        {flowers.map((flower) => (
          <CardSighting key={flower.id} picture={flower.profile_picture} />
        ))}
      </div>
    </div>
  );
};

export default Sightings;
