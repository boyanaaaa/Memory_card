import React, { useState } from "react";
import "./singleCard.css";

const SingleCard = () => {
  return (
    <div className="singleCard">
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRpMm5iam1qMmxnemt1bXo0YWg3dGYxdnJ6Nm51c2x2d2ZvdDQ5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vNTIkYpoAUb22FhsVr/giphy.gif"
        alt="sog smile"
      />
      <p className="cardTitle">Dog smile</p>
    </div>
  );
};

export default SingleCard;
