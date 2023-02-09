import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const listOfFavorites = useSelector((state) => state.favorites);
  console.log(listOfFavorites);
  return (
    <div className={styles.flowers}>
      <div className={styles.list}>
        <div className={styles.items}></div>
      </div>
    </div>
  );
};

export default Favorites;
