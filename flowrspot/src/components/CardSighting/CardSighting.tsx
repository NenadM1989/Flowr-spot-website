import React from "react";
import "../../components/CardSighting/CardSighting.css";
import { Link } from "react-router-dom";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import CardComments from "../CardComments/CardComments";
import { CardSightingProps } from "../../types/types";

const CardSighting = ({ picture }: CardSightingProps) => {
  return (
    <div className="card-sighting">
      <div className="card-picture">
        <Link to="/sighting-detail">
          <img src={picture} alt="flower" className="card-image" />
        </Link>
        <div className="card-location">
          <i className="fa fa-map-marker" />
          <p>San Francisco, US</p>
        </div>
      </div>
      <div className="card-description">
        <ProfilePicture width="40px" fontSize="15px" fontSizeItalic="11px" />
        <div className="card-text">
          <p className="paragraph3">
            Platycodon grandiflorus (from Ancient Greek πλατύς wide and κώδων
            bell) is a species of herbaceous flowering perennial plant of the …
          </p>
        </div>
        <CardComments width="106%" />
      </div>
    </div>
  );
};

export default CardSighting;
