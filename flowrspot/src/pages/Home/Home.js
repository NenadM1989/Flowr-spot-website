import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import { RandomFlowerList } from "../../services/services";
import Warning from "../../components/Warning/Warning";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFlowers } from "../../store/flowers/actions";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [flowers, setFlowers] = useState([]);
  const [term, setTerm] = useState();
  const [loading, setLoading] = useState(true);

  const flowerList = useSelector((state) => state.flowers.flowers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!term) {
      if (flowerList.length === 0) {
        RandomFlowerList.getFlowers()
          .then((data) => {
            setFlowers(data.data.flowers);
            dispatch(addFlowers(data.data.flowers));
            setTimeout(() => setLoading(false), 2000);
          })
          .catch((error) => console.log(error));
      } else {
        setFlowers(flowerList);
        setTimeout(() => setLoading(false), 2000);
      }
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
  }, [term, dispatch, flowers.length]);

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
        {loading ? (
          <div className="spinner">
            <ClipLoader
              color={"rgb(241, 206, 201)"}
              loading={loading}
              size={75}
            />
          </div>
        ) : flowers.length > 0 ? (
          <CardList flowers={flowers} />
        ) : (
          <Warning />
        )}
      </div>
    </div>
  );
};

export default Home;
