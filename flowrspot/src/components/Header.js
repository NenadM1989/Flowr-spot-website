import React from "react";
import styles from "./Header.modules.css";
import logo from "./flowerspot.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
