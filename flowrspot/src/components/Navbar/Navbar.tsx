import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import flowerspot from "../../images/flowerspot.png";
import image from "../../images/profile-picture.png";
import { NavbarProps } from "../../types/types";

const Navbar = ({ func, funct, openProfile }: NavbarProps) => {
  const [log, setLog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    setLog(!!token);
  }, [token]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={flowerspot} alt="logo" height={30} width={169} />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <Link to="/flowers" className="flowers" onClick={closeMenu}>
          <li>Flowers</li>
        </Link>
        <Link to="/sightings" className="sightings" onClick={closeMenu}>
          <li>Latest Sightings</li>
        </Link>
        <Link to="/favorites" className="favorites" onClick={closeMenu}>
          <li>Favorites</li>
        </Link>
        {!log && (
          <>
            <Link
              to="/"
              onClick={() => {
                funct(true), closeMenu;
              }}
              className="login"
            >
              <li>Login</li>
            </Link>
            <li>
              <button
                onClick={() => {
                  func(true), closeMenu;
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
