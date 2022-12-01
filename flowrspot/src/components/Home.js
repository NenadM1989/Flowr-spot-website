import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="div-image">
        <h1>Discover flowers around you</h1>
        <h4>Explore between more than 8.427 sightings</h4>
        <input
          className="input"
          placeholder="Looking for something specific?"
        ></input>
      </div>
    </div>
  );
}

export default Home;
