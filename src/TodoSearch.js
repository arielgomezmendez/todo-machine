import React from "react";
import "./TodoSearch.css";
import { useState } from "react";
const TodoSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        className="TodoSearch"
        placeholder="cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      ></input>
      <p>{searchValue}</p>
    </div>
  );
};

export default TodoSearch;
