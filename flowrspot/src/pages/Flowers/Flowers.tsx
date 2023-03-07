import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import styles from "../Flowers/Flowers.module.css";
import Card from "../../components/Card/Card";
import { RandomFlowerList } from "../../services/services";
import { IFlower } from "../../types/types";

const Flowers = () => {
  const [flowers, setFlowers] = useState<IFlower[]>([]);
  const [filteredFlowers, setFilteredFlowers] = useState<IFlower[]>([]);

  useEffect(() => {
    RandomFlowerList.getFlowers()
      .then((data) => setFlowers(data.data.flowers))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchSubmit = (searchTerm: string) => {
    console.log(`Search term: ${searchTerm}`);
    const filtered = flowers.filter((flower) =>
      flower.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFlowers(filtered);
  };

  const displayFlowers = filteredFlowers.length > 0 ? filteredFlowers : flowers;

  return (
    <div className={styles.flowers}>
      <div className={styles.search}>
        <Search onSubmit={handleSearchSubmit} />
      </div>
      <div className={styles.list}>
        <div className={styles.items}>
          {displayFlowers.map((flower) => (
            <Card
              key={flower.id}
              id={flower.id}
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
