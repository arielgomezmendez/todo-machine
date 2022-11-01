import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  const onSearchValue = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        className="TodoSearch"
        placeholder="cebolla"
        onChange={onSearchValue}
      ></input>
    </div>
  );
};

export default TodoSearch;
