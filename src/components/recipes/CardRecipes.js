import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CardRecipes.css";
import axios from "axios";

const CardRecipes = ({ result, onRecipes, getId }) => {
  const { title, image, sourceName, id } = result;

  // const linkRef = useRef(null);

  const getRecipes = () => {
    getId(id);
    onRecipes();
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card text-dark">
          <img className="card-img-top" src={image} alt={sourceName} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link
              onClick={getRecipes}
              to="/kpCookingRecipes"
              className="stretched-link"
            >
              {id}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipes;
