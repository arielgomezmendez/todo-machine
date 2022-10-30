import React from "react";
import "./App.css";
import TodoCounter  from "./TodoCounter";
import TodoSearch  from "./TodoSearch";

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>
      <input placeholder="cebolla"></input>
      {/*<TodoList>
        <TodoItem/>
      </TodoList>
      <CreateButton/>*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
