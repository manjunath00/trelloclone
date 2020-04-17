import React, {useEffect, useState} from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";
import Card from "../Card/Card";

function List(props) {
  const [listId, setListId] = useState(props.id);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards(listId);
  }, [listId]);

  const getAllCards = async (listId) => {
    const response = await trello.get(urls.getAllCards(listId));
    console.log("Response cards ", response);
    setCards(response.data);
    return response.data;
  };

  return (
    <div className="list-container">
      <div>
        <h5>{props.card.name}</h5>
      </div>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default List;
