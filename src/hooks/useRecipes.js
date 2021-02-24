import { useState, useEffect } from "react";
import axios from "axios";

const useRecipes = (defaultSearchTerm) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const API_KEY = "e67d535eb95c4b458c8a6f7f348ebec4";
  // 8dc8773d1eab476ab6308ded74d498d2

  const search = async (search) => {
    const results = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: API_KEY,
          query: search,
          instructionsRequired: true,
          number: 10,
        },
      }
    );
    setResults(results.data.results);
  };

  return [results, search];
};

export default useRecipes;
