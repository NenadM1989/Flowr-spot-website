import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
