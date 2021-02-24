import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Search.css";

const Search = ({ onFormSubmit }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (search) {
      onFormSubmit(search);
    }
    setSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search a Food"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default Search;
