import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../store/favorite/actions";
import { removeFromFavorites } from "../../store/favorite/actions";

const Card = ({ name, latinName, profilePicture, sightings, id }) => {
  const [log, setLog] = useState();

  const listOfFavorites = useSelector((state) => state.favorites);
  const isFavorite = listOfFavorites.includes(id);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setLog(!!token);
  }, []);

  const navigateTo = useHistory();
  return (
    <>
      <div className={styles.card}>
        <div className={styles["like-button"]}>
          {log && (
            <div onClick={handleFavoriteClick}>
              <i className={`fa fa-star ${styles.star}`}></i>
            </div>
          )}
        </div>

        <img
          src={profilePicture}
          alt="flower"
          onClick={() => navigateTo.push(`/flowerdetail/${id}`)}
        ></img>
        <div className={styles["flower-description"]}>
          <div className={styles["flower-name"]}>
            <h3>{name}</h3>
          </div>
          <div className={styles["latin-name"]}>
            <p className={styles.latin}>{latinName}</p>
          </div>
          <div className={styles.sightings}>
            <p className={styles.paragraph}>{sightings} sightings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
