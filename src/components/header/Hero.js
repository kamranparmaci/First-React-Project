import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero d-flex flex-column text-left justify-content-center">
        <h1 className="hero-header">CAN YOU COOK?</h1>
        {/* <p className="hero-text text-white">
          Eating is one of the highest pleasures.do the COOKING intheir the life
        </p> */}
        <Link to="/join" type="button" className="btn btn-one btn-lg">
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default Hero;
