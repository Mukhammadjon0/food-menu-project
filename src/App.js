import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FoodDetail from './pages/FoodDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StateContext } from './context';


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("water");
  const App_ID = "f724d2c4";
  const App_KEY = "181b9a77d1a1c3c5c43eac5266591591 ";


  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
      )
      .then((res) => {
        setData(res.data.hits);
      });
  }, [query]);

  return (
    <StateContext.Provider value={{data, setQuery, query}}>

      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:label' element={<FoodDetail />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
