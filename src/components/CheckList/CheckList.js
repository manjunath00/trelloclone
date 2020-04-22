import React, { useState, useEffect } from "react";

import {
  getAllCheckitems,
  createCheckItem,
  deleteACheckList,
} from "../../apis/trelloapi";

import CheckListItem from "./CheckListItem";
import Toggler from "../common/Toggler";

function CheckList(props) {
  const [checkListItems, setCheckListItems] = useState([]);
  const [checkListName, setCheckListName] = useState();
  const [isUpdated, setIsUpdated] = useState(null);
  const checkListId = props.checkListId;
  const cardId = props.idCard;

  useEffect(() => {
    getAllItemsInCheckList(checkListId);
  }, [isUpdated, checkListId]);

  const getAllItemsInCheckList = async (checkListId) => {
    const response = await getAllCheckitems(checkListId);
    setIsUpdated(true);
    setCheckListName(response.data.name);
    setCheckListItems(response.data.checkItems);
  };

  const addACheckListItem = async (checkListName) => {
    const response = await createCheckItem(checkListId, checkListName);
    setIsUpdated(false);
    return response;
  };

  const deleteCheckList = async (checkListId) => {
    const response = await deleteACheckList(checkListId); 
    console.log(response);
    return response;
  };

  return (
    <div>
      <div>
        <div>
          <span>{checkListName}</span>
          <span>
            <button onClick={() => deleteCheckList(checkListId)}>x</button>
          </span>
        </div>
      </div>
      {checkListItems.map((item) => (
        <CheckListItem todo={item} key={item.id} idCard={cardId} />
      ))}
      <Toggler desc="Add an item" onSubmit={addACheckListItem} />
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
