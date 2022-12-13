import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";

const Home = () => {
  const [flowers, setFlowers] = useState({});

  async function fetchData() {
    const res = await fetch(
      "https://flowrspot-api.herokuapp.com/api/v1/flowers"
    );
    res.json().then((res) => setFlowers(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-image">
        <img className="hero-image-picture" src={image} />
        <div className="hero-content">
          <h1>Discover flowers around you</h1>
          <p>Explore between more than 8.427 sightings</p>
          <Search />
        </div>
      </div>
      <div className="list">{JSON.stringify(flowers)}</div>
    </div>
  );
};

export default Home;
