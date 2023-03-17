import "./App.css";
import AppContext from "./Component/context/AppContext";
import Grid from "./Component/Grid";
import Banners from "./Component/Banner";
import SearchBars from "./Component/SearchBar";
import data from "./Component/data";
import React, { useState } from "react";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(data);
  const [filteredProducts] = useState(data);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== null) {
      const newList = filteredProducts.filter((product) => {
        return product.status.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newList);
    } else {
      setSearchResult(filteredProducts);
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{}}>
        <Banners />
        <SearchBars term={searchTerm} searchKeyWord={searchHandler} />
        <Grid
          filteredProducts={
            searchTerm.length < 1 ? filteredProducts : searchResult
          }
        />
      </AppContext.Provider>
    </div>
  );
};

export default App;
