import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodosLoading.css";

const TodosLoading = () => {
  const { searchedTodos} = React.useContext(TodoContext);
  console.log(searchedTodos);
  const loadingArray = [...searchedTodos].map((todo)=>todo.text);
  console.log(loadingArray);

  return (
    <div className="LoadingTodo-Container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">{loadingArray.length}</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};

export default TodosLoading;
