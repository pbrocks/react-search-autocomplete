import React from "react";
import "./App.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import movieItems from "./components/movieItems";
// https://stackoverflow.com/questions/54064909/redirect-to-not-redirecting-to-the-desired-url-react?rq=1
import theData from "./data/small-sample.json";

function App() {

const movieItems =  theData;

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400, margin: 20 }}>
          <h2>Pharmacy Lookup!</h2>
          <ReactSearchAutocomplete
            items={movieItems}
            fuseOptions={{ keys: ["label", "PharmacyName"] }} // Search on both fields
            resultStringKeyName="label" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "1rem",
              fontFamily: "Courier",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
            }}
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
      </header>
    </div>
  );
}

export default App;
