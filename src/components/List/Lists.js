import React, { useEffect, useState } from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";
import List from "./List";
import Toggler from "../common/Toggler";

function Lists(props) {
  // console.log(props);
  const boardId = props.props.match.params.id;
  const [id, setId] = useState(boardId);
  const [lists, setLists] = useState([]);
  const [isUpdated, setIsUpdated] = useState(null);

  useEffect(() => {
    getAllLists(id);
  }, [id, isUpdated]);

  const getAllLists = async (boardId) => {
    try {
      const response = await trello.get(urls.getAllLists(boardId));
      setLists(response.data);
      setIsUpdated(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const createAList = async (listName) => {
    console.log(listName);
    try {
      const body = {
        idBoard: boardId,
        name: listName,
      };
      const response = await trello.post(urls.postAList(), body);
      // console.log(response)
      setIsUpdated(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="list-container flex">
      {lists.map((list) => (
        <List list={list} key={list.id} id={list.id} />
      ))}
      <Toggler desc="Create New List" onSubmit={createAList} />
    </div>
  );
}

export default Lists;
