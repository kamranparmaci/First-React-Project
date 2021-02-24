import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          KPCooking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pl-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item pl-3">
              <Link to="/kpCookingRecipes" className="nav-link">
                KPCookingRecipes
              </Link>
            </li>
            <li className="nav-item pl-3">
              <Link to="/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li className="nav-item pl-3">
              <Link to="/join" className="nav-link">
                Join
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
