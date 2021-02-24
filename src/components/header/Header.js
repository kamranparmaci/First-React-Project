import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="head">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
