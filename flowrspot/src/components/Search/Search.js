import React, { useState } from "react";
import "../../components/Search/Search.css";
import image from "../../images/Vector3.png";

const Search = () => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setInput("");
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        className="input"
        placeholder="Looking for something specific?"
        value={input}
        onChange={inputHandler}
      />
      <img alt="" width="30px" className="image" src={image} />
    </form>
  );
};

export default Search;
