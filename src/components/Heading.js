import React from "react";

import logo from "../images/got_logo.png";
import "./heading.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero__logo" src={logo} alt="logo" />
      <h2 className="hero__subheading">Click a card to view details</h2>
    </div>
  );
};

export default Hero;
