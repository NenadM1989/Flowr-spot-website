import React from "react";
import { Link } from "react-router-dom";
import "../404/404.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <h2 className="page">Page not found!</h2>
      <Link to="/">
        <button className="back">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
