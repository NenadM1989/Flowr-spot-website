import React from "react";
import CardComments from "../../components/CardComments/CardComments";
import styles from "../SightingDetail/SightingDetail.module.css";
import pin from "../../images/pin.png";
import flower from "../../images/pl-image.png";
import profile from "../../images/profile-picture.png";
import ReportButton from "../../components/Buttons/ReportButton";

const SightingDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <img src={pin} alt="pin" className={styles.pin} />
        <button className={styles.view}>View on Google Maps</button>
        <button className={styles.report}>Report</button>
      </div>
      <div className={styles["card-profile"]}>
        <img src={flower} alt="flower" className={styles.flower} />
        <div className={styles.profile}>
          <div className={styles["profile-picture"]}>
            <img src={profile} alt="profile" className={styles.image} />
            <div className={styles.user}>
              <h3 className={styles.h3}>Ballon Flower</h3>
              <h4 className={styles.h4}>by Adam Moore</h4>
            </div>
          </div>
          <div className={styles.paragraph}>
            Platycodon grandiflorus (from Ancient Greek πλατύς wide and κώδων
            bell) is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
          </div>
          <div>
            <CardComments />
          </div>
        </div>
        <ReportButton />
      </div>
    </div>
  );
};

export default SightingDetail;
