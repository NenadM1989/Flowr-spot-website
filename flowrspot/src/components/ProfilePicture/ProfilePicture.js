import React from "react";
import styles from "../../components/ProfilePicture/ProfilePicture.module.css";
import pic from "../../images/profile-picture.png";

const ProfilePicture = ({ width, fontSize, fontSizeItalic }) => {
  console.log(width);
  return (
    <div className={styles.personal}>
      <div className={styles.photo}>
        <img
          src={pic}
          alt=""
          className={styles.image}
          style={{ width }}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.graph1} style={{ fontSize }}>
          Adam Moore
        </p>
        <p className={styles.graph2} style={{ fontSize: fontSizeItalic }}>
          47 sightings
        </p>
      </div>
    </div>
  );
};

export default ProfilePicture;
