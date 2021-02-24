import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/header/Home";
import KPCookingRecipes from "./components/recipes/KPCookingRecipes";
import $ from "jquery";

const App = () => {
  useEffect(() => {
    $(".navbar-brand, .btn").on("click", function (e) {
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
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/kpCookingRecipes" component={KPCookingRecipes} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
