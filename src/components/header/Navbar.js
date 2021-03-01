import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./Navbar.css";
import { SearchResults } from "../../contexts/SearchResults";
import useRecipes from "../../hooks/useRecipes";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: "Berkshire Swash", sans-serif;
  z-index: 100;
  background-image: linear-gradient(
    to right,
    var(--primary-navbar-color),
    var(--secondary-navbar-color)
  );
`;

const Navbar = (defaultSearchTerm) => {
  const [results, search] = useRecipes("");

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return (
    <Nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          KPCooking
        </Link>
        <SearchResults.Provider value={results}>
          <Search onFormSubmit={search} />
        </SearchResults.Provider>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
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
      </div>
    </Nav>
  );
};

export default Navbar;
