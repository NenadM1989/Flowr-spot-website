import React from "react";
import styles from "../../pages/User/User.module.css";
import pic from "../../images/profile-picture.png";
import ReportButton from "../../components/Buttons/ReportButton";
import CardSighting from "../../components/CardSighting/CardSighting";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.row}>
        <div className={styles.personal}>
          <div className={styles.photo}>
            <img src={pic} alt="" width="80px" />
          </div>
          <div className={styles.info}>
            <p className={styles.graph1}>Adam Moore</p>
            <p className={styles.graph2}>47 sightings</p>
          </div>
        </div>
        <ReportButton />
      </div>
      <div className={styles.list}>
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
      </div>
    </div>
  );
};

export default User;
