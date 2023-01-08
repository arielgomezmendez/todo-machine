import React from "react";
import "./DeleteIcon.css";
import { FaTrash } from "react-icons/fa";

const DeleteIcon = (props) => {
  return (
    <span className="Icon Icon-delete" onClick={props.onDelete}>
      <FaTrash />
    </span>
  );
};

export default DeleteIcon;
