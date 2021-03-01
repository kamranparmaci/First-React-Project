import React from "react";

const RecipeInstructions = ({ recipe }) => {
  const { step, equipment, ingredeints } = recipe;
  const renderedEquipments = equipment.map((equipment) => {
    return (
      <>
        <h3>{equipment.name}</h3>
        <img style={{ width: 100, height: 100 }} src={equipment.image} alt="" />
      </>
    );
  });

  // const renderedIngredeints = ingredeints.map((ingredeint) => {
  //   return (
  //     <>
  //       <h3>{ingredeint.name}</h3>
  //       <img src={ingredeint.image} alt="" />
  //     </>
  //   );
  // });

  return (
    <div className="step">
      <div>{renderedEquipments}</div>
      {/* <div>{renderedIngredeints}</div> */}
      {step}
    </div>
  );
};

export default RecipeInstructions;
