import React from "react";
import CheckIcon from "../CheckIcon";
import DeleteIcon from "../DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CheckIcon completed={props.completed} onComplete={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
