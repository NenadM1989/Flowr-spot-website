import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import flowerspot from "../../images/flowerspot.png";
import image from "../../images/profile-picture.png";

const Navbar = ({ funct, func, openProfile }) => {
  const [log, setLog] = useState();

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    setLog(!!token);
    //console.log("ovo je token", token);
  }, [token]);

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
        {!log && (
          <>
            <Link
              to="/"
              onClick={() => {
                funct(true);
              }}
              className="login"
            >
              <li>Login</li>
            </Link>
            <li>
              <button
                onClick={() => {
                  func(true);
                }}
                className="button"
              >
                New Account
              </button>
            </li>
          </>
        )}
        {log && (
          <>
            <Link
              onClick={() => {
                funct(true);
              }}
              className="navbar-item-login"
              to="/"
            >
              John Doe
            </Link>
            <Link to="/">
              <img
                onClick={() => openProfile(true)}
                src={image}
                className="navbar-image-login"
              />
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
