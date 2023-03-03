import React from "react";
import styles from "../CardProfile/CardProfile.module.css";
import image from "../../images/pl-image.png";
import profile from "../../images/profile-picture.png";
import CardComments from "../CardComments/CardComments";

const CardProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={image} alt="image" />
      </div>
      <div className={styles.profile}>
        <div className={styles["profile-picture"]}>
          <img src={profile} width={"50px"} />
          <div className={styles.paragraph}>
            <p className={styles.p1}>Ballon Flower</p>
            <p className={styles.p2}>by Adam Moore</p>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς wide and κώδων
            bell) is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
          </p>
        </div>
        <div className={styles.comments}>
          <CardComments width={"200px"} />
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
