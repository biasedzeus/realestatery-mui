import { useState } from "react";
import "./App.css";
import { productList } from "./assets/data";
import FilterBar from "./components/FilterBar";
import LandCard from "./components/LandCard";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  
  

  return (
    <div className="App">
        <FilterBar/>
      /<div className="product-container">

      {productList.map((product) => {
        return <LandCard key={product.id} product={product} />;
      })}
      </div>
    </div>
  );
}

export default App;
