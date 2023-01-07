import React from "react";
import CheckIcon from "../CheckIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CheckIcon completed={props.completed} onComplete={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
