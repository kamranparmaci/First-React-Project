import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AxiosContext } from "../../App";

import "./CardRecipes.css";

const CardRecipes = ({ result, path }) => {
  const { title, image, sourceName, id } = result;

  const axios = useContext(AxiosContext);

  const getRecipes = () => {
    axios(id);
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
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipes;
