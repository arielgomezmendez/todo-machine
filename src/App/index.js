import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

/*const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];*/

function useLocalStorage(itemName,initialValue) {
  // Traemos nuestros TODOs almacenados
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedItem = JSON.parse(localStorageItem);
  }

  // Guardamos nuestros TODOs del localStorage en nuestro estado
  const [item, setItem] = React.useState(parsedItem);

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveItem = (newItem) => {
    // Convertimos a string nuestros TODOs
    const stringifiedItem = JSON.stringify(newItem);
    // Los guardamos en el localStorage
    localStorage.setItem(itemName, stringifiedItem);
    // Actualizamos nuestro estado
    setItem(newItem);
  };

  return[
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1",[]);

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

  //Function to complete to-do
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  //Function to delete to-do
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
