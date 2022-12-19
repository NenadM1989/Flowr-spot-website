import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import flowerspot from "../../images/flowerspot.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={flowerspot} alt="logo" height={30} width={169}></img>
      </Link>
      <ul className="nav-links">
        <Link to="/flowers" className="flowers">
          <li>Flowers</li>
        </Link>
        <Link to="/sightings" className="sightings">
          <li>Latest Sightings</li>
        </Link>
        <Link to="/favorites" className="favorites">
          <li>Favorites</li>
        </Link>
        <Link to="/nenad/" className="login">
          <li>Login</li>
        </Link>
        <li>
          <button className="button">New Account</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
