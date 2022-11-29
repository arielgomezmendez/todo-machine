import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        className="TodoSearch"
        placeholder="cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      ></input>
    </div>
  );
};

export default TodoSearch;
