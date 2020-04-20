import React, { useState, useEffect } from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";

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

  const getAllItemsInCheckList = async (id) => {
    const response = await trello.get(urls.getCheckLists(id));
    setIsUpdated(true);
    setCheckListName(response.data.name);
    setCheckListItems(response.data.checkItems);
  };

  const addACheckListItem = async (checklistName) => {
    const body = {
      id: checkListId,
      name: checklistName,
    };
    const response = await trello.post(urls.postACheckItem(checkListId), body);
    setIsUpdated(false);
  };

  const deleteCheckList = async (checkListId) => {
    // console.log(checkListId)
    const response = await trello.delete(urls.deleteACheckList(checkListId));
    // setIsUpdated(false);
    console.log(response)
  }

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
        <CheckListItem todo={item} key={item.id} idCard={cardId}/>
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
