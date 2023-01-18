import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import styles from "../Flowers/Flowers.module.css";
import Card from "../../components/Card/Card";
import { RandomFlowerList } from "../../services/services";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    RandomFlowerList.getFlowers()
      .then((data) => setFlowers(data.data.flowers))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles.flowers}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.list}>
        <div className={styles.items}>
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
      </div>
    </div>
  );
};

export default Flowers;
