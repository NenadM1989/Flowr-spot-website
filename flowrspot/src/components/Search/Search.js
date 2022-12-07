import React from "react";
import "../../components/Search/Search.css";
import image from "../../images/Vector3.png";

const Search = () => {
  return (
    <form className="form">
      <input className="input" placeholder="Looking for something specific?" />
      <img alt="" width="30px" className="image" src={image} />
    </form>
  );
};

export default Search;
