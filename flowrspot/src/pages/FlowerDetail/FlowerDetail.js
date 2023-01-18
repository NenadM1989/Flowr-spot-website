import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../pages/FlowerDetail/FlowerDetail.module.css";
import hero from "../../images/hero-sightings.png";
import LikeButton from "../../components/Buttons/LikeButton";
import linebreak from "../../images/linebreak.png";
import { RandomFlowerList } from "../../services/services";

const FlowerDetail = () => {
  const params = useParams();
  const [flowerInfo, setFlowerInfo] = useState();

  useEffect(() => {
    RandomFlowerList.getFlowerById(params.id).then((res) => {
      console.log(res);
      setFlowerInfo(res.data.flower);
    });
  }, [params.id]);
  return (
    <div className={styles["flower-detail"]}>
      <div className={styles["hero-section-flower-detail"]}>
        <img className={styles["hero-img"]} src={hero} alt="" />
        <div className={styles["hero-section-content"]}>
          <div className={styles["flower-image"]}>
            <img
              className={styles["flower-img"]}
              src={flowerInfo?.profile_picture}
              alt=""
            />
          </div>
          <div className={styles["flower-profile"]}>
            <div className={styles["flower-detail-left"]}>
              <div className={styles["flower-sighting"]}>
                <LikeButton />
                <p className={styles["n-sightings"]}>
                  {flowerInfo?.sightings} sightings
                </p>
              </div>
              <div className={styles["flower-name"]}>
                <div className={styles["flower-name-left"]}>
                  <h3>{flowerInfo?.name}</h3>
                  <p>{flowerInfo?.latin_name}</p>
                </div>
              </div>
            </div>
            <div className={styles["flower-name-right"]}>
              <button>+Add New Sighting</button>
            </div>
          </div>
        </div>
        <div className={styles["flower-descriptions"]}>
          <div className={styles["flower-descriptions-content"]}>
            <div className={styles["flower-descriptions-left"]}>
              <p className={styles["flower-text"]}>
                Kingdom: Plantae <br /> Order: Asterales <br /> Family:
                Campanulaceae <br /> Species: P. grandiflorus
              </p>
            </div>
            <div className={styles["flower-descriptions-right"]}>
              <p className={styles["flower-text"]}>
                Platycodon grandiflorus (from Ancient Greek πλατύς wide and
                κώδων bell) is a species of herbaceous flowering perennial plant
                of the family Campanulaceae, and the only member of the genus
                Platycodon. It is native to East Asia (China, Korea, Japan, and
                the Russian Far East).[1] It is commonly known as balloon
                flower[2][3] (referring to the balloon-shaped flower buds),
                Chinese bellflower,[2] or platycodon.[2]
                <br /> <br /> Growing to 60 cm (24 in) tall by 30 cm (12 in)
                wide, it is an herbaceous perennial with dark green leaves and
                blue flowers in late summer. A notable feature of the plant is
                the flower bud which swells like a balloon before fully
                opening.[4] The five petals are fused together into a bell shape
                at the base, like its relatives, the campanulas. There are
                varieties with white, pink and purple blooms in cultivation.[5]
                In Korea, white flowers are more common. This plant[6] together
                with its cultivars Apoyama group[7] and Mariesii[8] have gained
                the Royal Horticultural Societs Award of Garden Merit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles["line-break"]}>
          <br className="b" />
          <img src={linebreak} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
