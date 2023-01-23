import React from "react";
import styles from "../../pages/User/User.module.css";
import ReportButton from "../../components/Buttons/ReportButton";
import CardSighting from "../../components/CardSighting/CardSighting";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.row}>
        <ProfilePicture width="80px" />
        <ReportButton
          color="white"
          background="linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)"
        >
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