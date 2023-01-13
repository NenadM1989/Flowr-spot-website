import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";
import { fetchData } from "../../api/APIUtils";
import CardList from "../../components/CardList/CardList";
import { Link } from "react-router-dom";

const Home = () => {
  const [flowers, setFlowers] = useState({});

  useEffect(() => {
    fetchData().then((res) => setFlowers(res));
  }, []);

  if (flowers.flowers) {
    console.log(flowers.flowers[0]);
  }
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img className="hero-image-picture" src={image} />
        <div className="hero-content">
          <Link to="/user">
            <h1>Discover flowers around you</h1>
          </Link>
          <p className="explore">Explore between more than 8.427 sightings</p>
          <Search />
        </div>
      </div>
      <div className="list">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
