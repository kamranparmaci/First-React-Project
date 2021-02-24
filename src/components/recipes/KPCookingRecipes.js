import React, { useEffect, useState } from "react";
import Search from "../Search";
import RecipesContent from "./RecipesContent";
import "./KPCookingRecipes.css";
import { Link } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";
import axios from "axios";
import RecipeAnalizeInstructions from "./RecipeAnalizeInstructions";

const KPCookingRecipes = () => {
  const [results, search] = useRecipes("");
  const [recipeAnalizes, setRecipeAnalizes] = useState([]);
  // const [id, setId] = useState();

  // const getId = () => {
  //   setId(id);
  // };

  const id = results.map((result) => result.id);

  const getRecipes = async () => {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
      {
        params: {
          apiKey: "e67d535eb95c4b458c8a6f7f348ebec4",
          id: id,
        },
      }
    );
    setRecipeAnalizes(recipe);
    console.log(recipeAnalizes);
    console.log(id);
  };

  return (
    <section className="kpCookingRecipes" id="kpCookingRecipes">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row text-center justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">
            KPCooking
          </Link>
          <Search onFormSubmit={search} />
        </div>
        <RecipesContent
          getId={getId}
          onRecipes={getRecipes}
          results={results}
        />
        <RecipeAnalizeInstructions recipeAnalizes={recipeAnalizes} />;
      </div>
    </section>
  );
};

export default KPCookingRecipes;
