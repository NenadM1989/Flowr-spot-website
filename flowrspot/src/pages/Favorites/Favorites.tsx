import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../../components/Card/Card";
import { RootState } from "../../types/types";

const Favorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const flowers = useSelector((state: RootState) => state.flowers.flowers);

  return (
    <div className={styles.flowers}>
      <div className={styles.list}>
        <div className={styles.items}>
          {favorites.length === 0 ? (
            <p className={styles.paragraph}>
              You have no favorite flowers yet!
            </p>
          ) : (
            favorites.map((favorite: number) => {
              const flower = flowers.find((cvet) => cvet.id === favorite);
              if (flower) {
                return (
                  <Card
                    key={flower.id}
                    name={flower.name}
                    latinName={flower.latin_name}
                    profilePicture={flower.profile_picture}
                    sightings={flower.sightings}
                    id={flower.id}
                  />
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
