import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../pages/FlowerDetail/FlowerDetail.module.css";
import star from "../../images/star.png";
import linebreak from "../../images/linebreak.png";
import { RandomFlowerList } from "../../services/services";
import { IParams, IFlowerInfo } from "../../types/types";

const FlowerDetail = () => {
  const params = useParams<IParams>();
  const [flowerInfo, setFlowerInfo] = useState<IFlowerInfo | undefined>();

  useEffect(() => {
    RandomFlowerList.getFlowerById(params.id).then((res) => {
      setFlowerInfo(res.data.flower);
    });
  }, [params.id]);
  return (
    <>
      <div className={styles["info-background"]}>
        <img
          className={styles["info-pic"]}
          src={flowerInfo?.profile_picture}
          alt=""
        />
        <div className={styles["info-data"]}>
          <div className={styles["info-like"]}>
            <div className={styles["info-star-container"]}>
              <img src={star} />
            </div>
            <div className={styles["info-sightings"]}>
              <span>{flowerInfo?.sightings}&nbsp;Sightings</span>
            </div>
          </div>
          <h1 className={styles["info-name"]}>{flowerInfo?.name}</h1>
          <h3 className={styles["info-latin-name"]}>
            {flowerInfo?.latin_name}
          </h3>
        </div>
        <button className={styles.button}>+Add New Sighting</button>
      </div>
      <div className={styles["info-bottom"]}>
        <div className={styles["info-left"]}>
          <h4 className={styles.h4}>Kingdom: Plantae</h4>
          <h4 className={styles.h4}>Order: Asterales</h4>
          <h4 className={styles.h4}>Family: Campanulaceae</h4>
          <h4 className={styles.h4}>Species: P. grandiflorus</h4>
        </div>
        <div className={styles["info-right"]}>
          <div className={styles.text}>
            Platycodon grandiflorus (from Ancient Greek πλατύς wide and κώδων
            bell) is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
          </div>
          <div className={styles.text}>
            Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an
            herbaceous perennial with dark green leaves and blue flowers in late
            summer. A notable feature of the plant is the flower bud which
            swells like a balloon before fully opening.[4] The five petals are
            fused together into a bell shape at the base, like its relatives,
            the campanulas. There are varieties with white, pink and purple
            blooms in cultivation.[5] In Korea, white flowers are more common.
            This plant[6] together with its cultivars Apoyama group[7] and
            Mariesii[8] have gained the Royal Horticultural Societs Award of
            Garden Merit.
          </div>
          <div className={styles["line-break"]}>
            <br className="b" />
            <img src={linebreak} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerDetail;
