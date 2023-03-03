import React from "react";
import "../CardComments/CardComments.css";
import { CardCommentsProps } from "../../types/types";

const CardComments = ({ width }: CardCommentsProps) => {
  return (
    <div className="card-comments">
      <div className="comments-favorites" style={{ width }}>
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
