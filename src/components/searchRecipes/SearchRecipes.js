import React, { useEffect } from "react";
import RecipesContent from "./RecipesContent";
import "./SearchRecipes.css";
import { Link } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";
import { SearchResults } from "../../contexts/SearchResults";

const SearchRecipes = () => {
  const [results, search] = useRecipes("");

  useEffect(() => {
    search();
  }, []);

  return (
    <section className="searchRecipes py-5" id="searchRecipes">
      <div className="container">
        <SearchResults.Provider value={results}>
          <RecipesContent />
        </SearchResults.Provider>
      </div>
    </section>
  );
};

export default SearchRecipes;
