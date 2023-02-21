import React from "react";
//import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
//import { addFlowers } from "../../store/flowers/actions";

const CardList = ({ flowers }) => {
  // const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(addFlowers(flowers));
  }, [flowers]);*/
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
