import React from "react";

const CheckListItem = ({ todo }) => {
  const checked = todo.state === "incomplete" ? false : true;
  return (
    <div id={todo.id}>
      <input type="checkbox" checked={checked} />
      <span>{todo.name}</span>
    </div>
  );
};

export default CheckListItem;
