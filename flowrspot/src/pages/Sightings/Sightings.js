import React from "react";
import "../Sightings/Sightings.css";
import AddNewSightings from "../../components/Buttons/AddNewSightings";
//import SightingList from "../../components/SightingList/SightingList";

const Sightings = () => {
  return (
    <div className="sightings-container">
      <div className="sightings-top">
        <div className="sightings-content">
          <div className="sightings-title">
            <p className="paragraph first-paragraph">Sighting List</p>
          </div>
          <div className="button-add">
            <AddNewSightings />
          </div>
        </div>
        <div className="sightings-explore">
          <p className="paragraph second-paragraph">
            Explore between 8,427 sightings
          </p>
        </div>
      </div>
      <div></div>
      <div className="sighting-button">
        <AddNewSightings />
      </div>
    </div>
  );
};

export default Sightings;
