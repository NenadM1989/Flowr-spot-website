import React from "react";
import "../CardComments/CardComments.css";

const CardComments = () => {
  return (
    <div className={"card-comments"}>
      <div className="comments-favorites">
        <div className="comment">
          <i className="fa fa-commenting comments" />
          <p className="p">12 comments</p>
        </div>
        <div className="favorite">
          <i className="fa fa-heart heart" />
          <p className="p">18 favorites</p>
        </div>
      </div>
    </div>
  );
};

export default CardComments;
