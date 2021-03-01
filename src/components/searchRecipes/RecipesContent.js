import React, { useContext } from "react";
import CardRecipes from "./CardRecipes";
import "./RecipesContent.css";
import { SearchResults } from "../../contexts/SearchResults";

const RecipesContent = () => {
  const results = useContext(SearchResults);

  const renderedResults = results.map((result) => {
    return <CardRecipes key={result.id} result={result} />;
  });

  return <div className="card-container">{renderedResults}</div>;
};

export default RecipesContent;
