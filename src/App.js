import React from "react";
import "./App.css";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import CreateButton from "./CreateButton";
import TodoItem from "./TodoItem";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  // State of search
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed == true).length;
  const totalTodos = todos.length;

  // Create array to store all todos, to avoid to many renders in the application,
  // when the user  makes the search
  let searchedTodos = [];

  //logic for operation of the search engine
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateButton />
    </React.Fragment>
  );
}

export default App;
