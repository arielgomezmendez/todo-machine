import React from "react";
import "./CheckIcon.css";
import { FaCheck } from "react-icons/fa";
const CheckIcon = (props) => {
  return (
    <span
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
    >
      <FaCheck />
    </span>
  );
};

export default CheckIcon;
