import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import KPCookingRecipes from "./components/pages/KPCookingRecipes";
import useRecipesAnalizes from "./hooks/useRecipesAnalizes";
import Articles from "./components/pages/Articles";
import Join from "./components/pages/Join";
import $ from "jquery";

export const AxiosContext = React.createContext(null);
export const RecipeAnalizes = React.createContext();

const App = () => {
  const [recipeAnalizes, getRecipes] = useRecipesAnalizes([]);

  useEffect(() => {
    $(".btn").on("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          600
        );
      }
    });
  });

  return (
    <Router>
      <Switch>
        <AxiosContext.Provider value={getRecipes}>
          <Route path="/" exact component={Home} />
          <RecipeAnalizes.Provider value={recipeAnalizes}>
            <Route path="/kpCookingRecipes" component={KPCookingRecipes} />
          </RecipeAnalizes.Provider>
        </AxiosContext.Provider>
        <Route path="/articles" component={Articles} />
        <Route path="/join" component={Join} />
      </Switch>
    </Router>
  );
};

export default App;
