import React from "react";
import styles from "../../pages/User/User.module.css";
import ReportButton from "../../components/Buttons/ReportButton";
import CardSighting from "../../components/CardSighting/CardSighting";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.row}>
        <ProfilePicture />
        <ReportButton color="white" background="#DF9186">
          Report
        </ReportButton>
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
