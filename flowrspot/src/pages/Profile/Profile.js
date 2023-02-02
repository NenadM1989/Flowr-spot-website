import React from "react";
import styles from "./Profile.module.css";
import image from "../../images/profile-picture.png";

const Profile = ({ funct, funcLog }) => {
  const handleClick = () => {
    funct(false);
    funcLog(false);
    localStorage.removeItem("auth_token");
  };

  return (
    <div className={styles.profile}>
      <div className={styles.close} onClick={() => funct(false)}>
        X
      </div>
      <div className={styles["image-name"]}>
        <div className={styles.image}>
          <img src={image} alt="profile-image" />
        </div>
        <div className={styles.name}>
          <h3>Michael Berry</h3>
          <p>47 sightings</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles["first-name"]}>
          <p>First Name</p>
          <h3>Michael</h3>
        </div>
        <div className={styles["last-name"]}>
          <p>Last Name</p>
          <h3>Berry</h3>
        </div>
        <div className={styles.email}>
          <p>Email Adress</p>
          <h3>michael.berry@gmail.com</h3>
        </div>
      </div>
      <div className={styles.button} onClick={handleClick}>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
