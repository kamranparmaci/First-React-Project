import React, { useContext } from "react";
import { RecipeAnalizes } from "../../App";
import RecipeInstructions from "./RecipeInstructions";

const RecipeAnalizeInstructionsContent = () => {
  const recipes = useContext(RecipeAnalizes);

  const renderedRecipeInstructions = recipes.map((recipe, id) => {
    return <RecipeInstructions key={id} recipe={recipe} />;
  });

  return <div className="container">{renderedRecipeInstructions}</div>;
};

export default RecipeAnalizeInstructionsContent;
