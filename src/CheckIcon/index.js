import React from "react";
import "./CheckIcon.css"

const CheckIcon = (props) => {
  return (
    <div>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ok
      </span>
    </div>
  );
};

export default CheckIcon;
