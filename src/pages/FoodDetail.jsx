import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { StateContext } from "../context";
import axios from "axios";
import { StateContext } from "../context";

function FoodDetail() {
  const { data, query } = useContext(StateContext);
  // const [product, setProduct] = useState(data);
  // const [queryDetail, setQueryDetail] = useState(query);
  // const App_ID = "f724d2c4";
  // const App_KEY = "181b9a77d1a1c3c5c43eac5266591591 ";

  //   const { data } = useContext(StateContext);
  const { label } = useParams();
  const food = data.find((item) => item.recipe.label === label) || {};
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.edamam.com/search?q=${queryDetail}&app_id=${App_ID}&app_key=${App_KEY}&label=${label}`
  //     )
  //     .then((res) => {
  //       setData(res.data.hits);
  //     });
  // }, [queryDetail, label]);
  return (
    <div>
      <div className="w-full bg-orange-500 flex flex-row p-5">
        <img src={food?.recipe?.image} alt="food" />
        <div className="flex flex-col mx-3">
          <h1 className="text-2xl font-semibold">{food.recipe?.label}</h1>
          <span>
            <span className="text-xl font-semibold"> Food Type: </span>
            {food?.recipe?.cuisineType}
          </span>
          <p className="my-4">
            <span className="text-xl font-semibold"> IngredientLines: </span>
            {food?.recipe?.ingredientLines}
          </p>
          <p>
            <span className="text-xl font-semibold">Health Labels:</span>
            {food?.recipe?.healthLabels}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
