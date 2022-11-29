import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({total, completed}) => {
  return (
    <div>
      <h2 className="TodoCounter">Haz completado {completed} de {total} todos</h2>
    </div>
  );
};

export default TodoCounter;
