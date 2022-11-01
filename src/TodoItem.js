import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span className="{`Icon Icon-check ${props.completed && 'Icon-check--active'}`}">C</span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span>X</span>
    </li>
  );
};

export default TodoItem;
