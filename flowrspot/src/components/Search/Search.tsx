import React, { useState } from "react";
import "../../components/Search/Search.css";
import image from "../../images/Vector3.png";

type SearchProps = {
  onSubmit: (input: string) => void;
};

const Search = ({ onSubmit }: SearchProps) => {
  const [input, setInput] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        className="input"
        placeholder="Looking for something specific?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <img alt="" width="30px" className="image" src={image} />
    </form>
  );
};

export default Search;
