import React from 'react'

const DeleteIcon = (props) => {
  return (
    <div>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </div>
  )
}

export default DeleteIcon
