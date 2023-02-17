import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../../components/Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <div className={styles.flowers}>
      <div className={styles.list}>
        {favorites.length === 0 ? (
          <p>You have no favorite flowers yet!</p>
        ) : (
          favorites.map((favorite) => (
            <Card
              key={favorite.id}
              name={favorite.name}
              latinName={favorite.latinName}
              profilePicture={favorite.profilePicture}
              sightings={favorite.sightings}
              id={favorite.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
