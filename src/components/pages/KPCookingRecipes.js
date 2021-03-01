import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchResults } from "../../contexts/SearchResults";
import useRecipes from "../../hooks/useRecipes";
import Navbar from "../header/Navbar";
import RecipeAnalizeInstructionsContent from "../kpCookingRecipes/RecipeAnalizeInstructionsContent";
import Search from "../Search";
import RecipesContent from "../searchRecipes/RecipesContent";

const KPCookingRecipes = () => {
  const [results] = useRecipes([]);

  return (
    <>
      <div className="container">
        <SearchResults.Provider value={results}>
          <Navbar />
          {/* <div className="d-flex flex-column flex-lg-row text-center justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">
            KPCooking
          </Link>
          <Search onFormSubmit={search} />
        </div> */}
          <RecipesContent />
        </SearchResults.Provider>
        <RecipeAnalizeInstructionsContent />
      </div>
    </>
  );
};

export default KPCookingRecipes;
