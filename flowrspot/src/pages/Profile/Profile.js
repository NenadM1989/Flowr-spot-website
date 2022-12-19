import React from "react";
import styles from "./Profile.module.css";
import image from "../../images/profile-picture.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.close}>X</div>
    </div>
  );
};

export default Profile;
