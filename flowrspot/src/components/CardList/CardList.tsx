import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
import { IFlower } from "../../types/types";

interface CardListProps {
  flowers: IFlower[];
}

const CardList = ({ flowers }: CardListProps) => {
  return (
    <div className={styles.container}>
      {flowers.map((flower) => (
        <Card
          key={flower.id}
          name={flower.name}
          latinName={flower.latin_name}
          profilePicture={flower.profile_picture}
          sightings={flower.sightings}
          id={flower.id}
        />
      ))}
    </div>
  );
};

export default CardList;
