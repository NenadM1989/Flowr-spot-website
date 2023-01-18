import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = ({ flowers }) => {
  return (
    <div className={styles.container}>
      {flowers.map((flower) => (
        <Card
          key={flower.id}
          name={flower.name}
          latinName={flower.latin_name}
          profilePicture={flower.profile_picture}
          sightings={flower.sightings}
        />
      ))}
    </div>
  );
};

export default CardList;
