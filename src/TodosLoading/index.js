import React from "react";
import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="LoadingTodo-Container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};

export default TodosLoading;
