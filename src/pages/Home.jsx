import React, { useContext, useState } from "react";
import Products from "../components/Products";
import { StateContext } from "../context";

function Home() {
  const { data, setQuery } = useContext(StateContext);
  const [inputVal, setInputVal] = useState();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Food info</h1>
      <form
        className="my-5 flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(inputVal);
        }}
      >
        <input
          required
          className="px-2 outline outline-2 rounded"
          type="text"
          placeholder="search..."
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="border-2 mx-2 px-2 bg-sky-600 text-white">
          Find
        </button>
      </form>
      <div className="grid grid-cols-4 gap-2">
        {data.length > 0 ? (
          data.map((item) => <Products key={item.id} {...item} />)
        ) : (
          <h1>Item not Found</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
