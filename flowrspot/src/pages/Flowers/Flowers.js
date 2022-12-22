import React from "react";
import Search from "../../components/Search/Search";
import styles from "../Flowers/Flowers.module.css";
import Card from "../../components/Card/Card";

const Flowers = () => {
  return (
    <div className={styles.flowers}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.list}>
        <div className={styles.items}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Flowers;
