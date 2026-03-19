import React, { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <p className="headerTitle">Dog Memory Game</p>
        <p className="headerDescription">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="rightHeader"></div>
    </div>
  );
};

export default Header;
