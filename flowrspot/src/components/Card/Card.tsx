import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favorite/actions";
import { RootState } from "../../types/types";
import { CardProps } from "../../types/types";

const Card = ({
  name,
  latinName,
  profilePicture,
  sightings,
  id,
}: CardProps) => {
  const [log, setLog] = useState(false);
  const navigateTo = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.favorites.includes(id);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setLog(!!token);
  }, []);

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(id));
    } else {
      dispatch(removeFromFavorites(id));
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles["like-button"]} onClick={handleClick}>
          {log && (
            <div>
              <i
                className={`fa fa-star ${styles.star} ${
                  isFavorite ? styles.favorite : ""
                }`}
              ></i>
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
