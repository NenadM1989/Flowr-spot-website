import React from "react";
import "../../components/CardSighting/CardSighting.css";
import flower from "../../images/pl-image.png";
import profile from "../../images/profile-picture.png";

const CardSighting = () => {
  return (
    <div className="card-sighting">
      <div className="card-picture">
        <img src={flower} alt="flower" className="card-image" />
        <div className="card-location">
          <i className="fa fa-map-marker" />
          <p>San Francisco, US</p>
        </div>
      </div>
      <div className="card-description">
        <div className="profile-picture">
          <img src={profile} alt="profile-picture" width={40} height={40} />
          <div className="card-info">
            <p className="paragraph1">Balcony Flower</p>
            <p className="paragraph2">by Adam Moore</p>
          </div>
        </div>
        <div className="card-text">
          <p className="paragraph3">
            Platycodon grandiflorus (from Ancient Greek πλατύς wide and κώδων
            bell) is a species of herbaceous flowering perennial plant of the …
          </p>
        </div>
        <div className="card-comments">
          <div className="comments-favorites">
            <div className="comment">
              <i className="fa fa-commenting comments" />
              <p className="p">12 comments</p>
            </div>
            <div className="favorite">
              <i className="fa fa-heart heart" />
              <p className="p">18 favorites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSighting;
