import React, { useState, useEffect } from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";

import CheckListItem from "./CheckListItem";
import Toggler from "./Toggler";

function CheckList(props) {
  const [checkListItems, setCheckListItems] = useState([]);

  useEffect(() => {
    getAllItemsInCheckList(props.checkListId);
  }, []);
  const getAllItemsInCheckList = async (id) => {
    const response = await await trello.get(urls.getCheckLists(id));
    setCheckListItems(response.data.checkItems);
  };
  console.log(checkListItems);

  return (
    <div>
      <div>CheckList</div>
      {checkListItems.map((item) => (
        <CheckListItem todo={item} key={item.id}/>
      ))}
      <Toggler desc="Add an item"/>
    </div>
  );
}

export default CheckList;

// idChecklist: "5e4f6e7a2014981bf39bf338"
// state: "incomplete"
// idMember: null
// id: "5e4f6f0f40a0f17d0faf4681"
// name: "Become a good in basic data structures"
// nameData: null
// pos: 17171
// due: null
