import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import { Link } from "react-router-dom";
import { RandomFlowerList } from "../../services/services";

const Home = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    RandomFlowerList.getFlowers()
      .then((data) => setFlowers(data.data.flowers))
      .catch((error) => console.log(error));
  }, []);

  /*useEffect(() => {
    console.log(flowers);
  }, [flowers]);*/

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
        <CardList flowers={flowers} />
      </div>
    </div>
  );
};

export default Home;
