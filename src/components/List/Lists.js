import React, { useEffect, useState } from "react";

import { getAllLists, createAList } from "../../apis/trello";
import List from "./List";
import Toggler from "../common/Toggler";

function Lists(props) {
  // console.log(props);
  const boardId = props.props.match.params.id;
  const [id, setId] = useState(boardId);
  const [lists, setLists] = useState([]);
  const [isUpdated, setIsUpdated] = useState(null);

  useEffect(() => {
    getLists(id);
  }, [id, isUpdated]);

  const getLists = async (boardId) => {
    const response = await getAllLists(boardId);
    setLists(response.data);
    setIsUpdated(true);
  };

  const newList = async (boardId, listName) => {
    const response = await createAList(boardId, listName);
    setIsUpdated(false);
    return response;
  };

  return (
    <div className="list-container flex">
      {lists.map((list) => (
        <List list={list} key={list.id} id={list.id} />
      ))}
      <Toggler desc="Create New List" onSubmit={newList} />
    </div>
  );
}

export default Lists;
