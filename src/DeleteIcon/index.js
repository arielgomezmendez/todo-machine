import React from "react";
import "./DeleteIcon.css";

const DeleteIcon = (props) => {
  return (
    <span className="Icon Icon-delete" onClick={props.onDelete}>
      X
    </span>
  );
};

export default DeleteIcon;
