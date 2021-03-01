import { useEffect, useState } from "react";
import axios from "axios";

const useRecipesAnalizes = () => {
  const [recipeAnalizes, setRecipeAnalizes] = useState([]);

  const getRecipes = async (id) => {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
      {
        params: {
          apiKey: "8dc8773d1eab476ab6308ded74d498d2",
          id: id,
        },
      }
    );
    setRecipeAnalizes(recipe.data[0].steps);
    console.log(recipeAnalizes);
    console.log(id);
  };
  return [recipeAnalizes, getRecipes];
};

export default useRecipesAnalizes;
