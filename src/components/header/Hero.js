import React, { useEffect } from "react";
import "./Hero.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div
        className="hero d-flex flex-column text-left justify-content-center align-items-start"
        id="hero"
      >
        <h1 className="hero-header">CAN YOU COOK?</h1>
        <p className="hero-text text-white my-3 w-75">
          Eating is one of the highest pleasures.do the COOKING intheir the
          <span>life</span>
          Eating is one of the highest pleasures.do the COOKING intheir the life
        </p>
        <div className="d-flex mt-3">
          <Link
            to="/join"
            type="button"
            className="btn btn-one btn-lg border-0"
          >
            Join Us
          </Link>
          <a
            href="#kpCookingRecipes"
            type="button"
            className="btn btn-lg border-outline-0 border-0 ml-3"
          >
            <i className="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
