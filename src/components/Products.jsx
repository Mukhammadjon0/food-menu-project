import React from "react";
import { useNavigate } from "react-router-dom";

function Products({ recipe }) {
  const navigate = useNavigate();
  const getDetail = () => {
    navigate(`detail/${recipe.label}`);
  };
  console.log(recipe);
  return (
    <div className=" bg-slate-600 text-white gap-3 p-2">
      <img
        onClick={getDetail}
        className="cursor-pointer w-full"
        src={recipe.image}
        alt="food"
      />
      <h1 className="text-2xl">{recipe.label}</h1>
    </div>
  );
}

export default Products;
