import React, { useState, useEffect } from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";

const CheckListItem = ({ todo, idCard }) => {
  let status = todo.state === "incomplete" ? false : true;
  const [checked, setChecked] = useState(status);
  // const { idCheck}
  const onChange = async (idCheckList, idCheckItem, checked) => {
    // console.log(idCheckList);

    const isChecked = !checked ? "complete" : "incomplete";
    setChecked(!checked);
    const response = await trello.put(
      urls.toggleACheckItem(idCheckList, idCheckItem, isChecked)
      );
    console.log(response.data);
  };

  // console.log(todo);
  return (
    <div id={todo.id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(idCard, todo.id, checked)}
      />
      <span>{todo.name}</span>
    </div>
  );
};

export default CheckListItem;

// idChecklist: "5e57ac77b6dc2e79ae15a447"
// state: "complete"
// idMember: null
// id: "5e57acc164cc2706715e73d4"
// name: "Creating dropdown menu using react"
// nameData: null
// pos: 85344
