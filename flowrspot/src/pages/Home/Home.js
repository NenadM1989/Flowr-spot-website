import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import { RandomFlowerList } from "../../services/services";
import Warning from "../../components/Warning/Warning";
import { Link } from "react-router-dom";

const Home = () => {
  const [flowers, setFlowers] = useState([]);
  const [term, setTerm] = useState();

  useEffect(() => {
    if (!term) {
      RandomFlowerList.getFlowers()
        .then((data) => setFlowers(data.data.flowers))
        .catch((error) => console.log(error));
    }
    if (term) {
      RandomFlowerList.getFlowers()
        .then((data) =>
          setFlowers(
            data.data.flowers.filter(
              (flower) => flower.name.toLowerCase() === term
            )
          )
        )
        .catch((error) => console.log(error));
    }
  }, [term]);

  const searchSubmit = (value) => {
    setTerm(value);
  };

  return (
    <div className="hero-container">
      <div className="hero-image">
        <img className="hero-image-picture" src={image} />
        <div className="hero-content">
          <Link to="/singleflower">
            <h1>Discover flowers around you</h1>
          </Link>
          <p className="explore">Explore between more than 8.427 sightings</p>
          <Search onSubmit={searchSubmit} />
        </div>
      </div>
      <div className="list">
        {flowers.length > 0 ? <CardList flowers={flowers} /> : <Warning />}
      </div>
    </div>
  );
};

export default Home;
