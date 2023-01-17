import { useState, useEffect } from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import AllRecipes from "./components/AllRecipes";

function App() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("chicken");

  const appId = "091e2f8c";
  const appKeys = "4849ecd7f9a386720b41814399e685b5";
  const URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKeys}`;

  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const fetchedData = await res.json();
      //console.log(fetchedData)
      setData(fetchedData.hits);
    } catch (err) {
      console.log(err, "this is error message");
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  console.log(inputVal);

  const searchRecipe = () => {
    setSearchQuery(inputVal);
    setInputVal("");
  };
  console.log(searchQuery, "search query");

  return (
    <div className="App">
      <h1>Food App</h1>
      <input
        type="text"
        placeholder="Search for your recipe..."
        id="input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={searchRecipe}>Search</button>

      {/* <MediaCard /> */}
      <AllRecipes data={data} />
    </div>
  );
}

export default App;
