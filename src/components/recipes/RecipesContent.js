import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRecipes from "./CardRecipes";
import "./RecipesContent.css";

const RecipesContent = ({ results, onRecipes, getId }) => {
  const renderedResults = results.map((result) => {
    return (
      <CardRecipes
        key={result.id}
        onRecipes={onRecipes}
        result={result}
        getId={getId}
      />
    );
  });

  return <div className="card-container mt-5">{renderedResults}</div>;
};

export default RecipesContent;
