import React from "react";
import styles from "../../pages/User/User.module.css";
import ReportButton from "../../components/Buttons/ReportButton";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.row}>
        <ProfilePicture width="80px" fontSize="14px" fontSizeItalic="12px" />
        <ReportButton
          color="white"
          background="linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)"
        >
          Report
        </ReportButton>
      </div>
    </div>
  );
};

export default User;
