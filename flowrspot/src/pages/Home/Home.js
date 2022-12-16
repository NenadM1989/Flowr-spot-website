import React, { useState, useEffect } from "react";
import "./Home.css";
//import image from "../../images/hero.png";
//import Search from "../../components/Search/Search";
import { fetchData } from "../../api/APIUtils";
//import CardList from "../../components/CardList/CardList";
//import Login from "../Login/Login";
//import CreateAnAccount from "../CreateAnAccount/CreateAnAccount";
import Profile from "../Profile/Profile";

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
      <div className="card-list"></div>
      <Profile />
    </div>
  );
};

export default Home;
