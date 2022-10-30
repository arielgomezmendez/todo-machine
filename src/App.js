import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
      </TodoList>
      <CreateButton/>
    </div>
  );
}

export default App;
