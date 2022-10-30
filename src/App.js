import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment className="App">
      {/*<TodoCounter/> */}
        <h2>Haz completado 2 de 3 todos</h2>
      
      {/*<TodoSearch/> */}
      <input placeholder='cebolla'></input>
      {/*<TodoList>
        <TodoItem/>
      </TodoList>
      <CreateButton/>*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
