import { useState, useEffect } from "react";
import "./App.css";
import { productList } from "./assets/data";
import FilterBar from "./components/FilterBar";
import LandCard from "./components/LandCard";
import differenceInMonths from "date-fns/differenceInMonths";
import Header from "./components/Header";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import {motion} from 'framer-motion';

const ProductContainer = styled(Stack)({
  width: "90%",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  padding: "1rem",
});

function App() {

  
  const initialState = {
    location: "",
    price: [0, 10000],
    moveInDate: "",
    propertyType: "",
  };

  const [displayData, setDisplayData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const [filters, setFilters] = useState(initialState);

  const locationList = [
    ...new Set(productList.map((product) => product.address.state)),
  ];

  const propertyTypeList = [
    ...new Set(productList.map((product) => product.propertyType)),
  ];

  function handleSearchWordChange(e) {
    setSearchWord(e.target.value);
    Searchfilter();
  }

  function Searchfilter() {
    if (searchWord) {
      var updatedList = productList.filter(
        (item) =>
          item.title.toLowerCase().search(searchWord.toLowerCase().trim()) !==
          -1
      );
      setDisplayData(updatedList);
      updatedList.length === 0 ? setResultsFound(false) : setResultsFound(true);
    }
  }

  function clearFilters() {
    setFilters(initialState);
    setDisplayData(productList);
  }

  function applyFilters() {
    let updatedList = productList;

    if (filters.location) {
      updatedList = updatedList.filter(
        (data) => data.address.state === filters.location
      );
    }

    if (filters.moveInDate) {
      updatedList = updatedList.filter(
        (data) => differenceInMonths(data.moveInDate, filters.moveInDate) < 4
      );
    }

    if (filters.propertyType) {
      updatedList = updatedList.filter(
        (data) => data.propertyType === filters.propertyType
      );
    }

    if (filters.price.length > 0) {
      let minPrice = filters.price[0];
      let maxPrice = filters.price[1];
      updatedList = updatedList.filter(
        (data) => data.price >= minPrice && data.price <= maxPrice
      );
    }

    setDisplayData(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchWord={searchWord}
        handleChange={handleSearchWordChange}
      />
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        locations={locationList}
        clearFilters={clearFilters}
        applyFilters={applyFilters}
        propertyTypeList={propertyTypeList}
      />

      {resultsFound ? (
        <ProductContainer
        component={motion.div}
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: .2,
          type: "spring",
          stiffness: "200",
        }}
        viewport={{ once: true }}>
          {displayData.map((product) => {
            return <LandCard key={product.id} product={product} />;
          })}
        </ProductContainer>
      ) : (
        <Typography>No Results</Typography>
      )}
    </div>
  );
}

export default App;
