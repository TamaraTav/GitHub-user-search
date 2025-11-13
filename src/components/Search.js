import { useState } from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { SearchBar } from "./styles/Search.Styled";
import search from "../assets/icon-search.svg";

function Search(props) {
  const [inputVal, setInputVal] = useState("octocat");

  return (
    <SearchBar theme={props.theme}>
      <div className="forFlex1">
        <h1>devfinder</h1>
        <div
          className="forFlex2"
          onClick={() => {
            props.setTheme(!props.theme);
          }}
        >
          <p className="theme">{props.theme == false ? "LIGHT" : "Dark"}</p>
          <img src={props.theme == false ? sun : moon} />
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          value={inputVal}
          placeholder={props.placeholder}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.setValue(inputVal);
            }
          }}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <img src={search} />
        <div>
          <button
            onClick={() => {
              props.setValue(inputVal);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </SearchBar>
  );
}

export default Search;
