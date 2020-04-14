import React, {useEffect, useState} from "react";

import urls from "../apis/getUrls";
import trello from "../apis/trelloapi";
import List from "./common/List";

function Lists(props) {
  const boardId = props.match.params.id;
  const [id, setId] = useState(boardId);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getAllLists(id);
  }, [id]);

  const getAllLists = async (boardId) => {
    const response = await trello.get(urls.getAllLists(boardId));
    setLists(response.data);
  };

  return (
    <div className="list-container flex">
      {lists.map((list) => (
        <List card={list} key={list.id} id={list.id} />
      ))}
    </div>
  );
}

export default Lists;
