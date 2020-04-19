import React, { useEffect, useState } from "react";

import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";
import Card from "../Card/Card";
import Toggler from "../common/Toggler";

function List(props) {
  const [listId, setListId] = useState(props.id);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState(false);

  useEffect(() => {
    getAllCards(listId);
  }, [listId, newCard]);

  const getAllCards = async (listId) => {
    const response = await trello.get(urls.getAllCards(listId));
    // console.log("Response cards ", response);
    setCards(response.data);
    return response.data;
  };

  const addANewCard = async (cardName) => {
    // console.log(cardName)
    const body = {
      idList: listId,
      name: cardName
    }
    const response = await trello.post(urls.postACard(), body);
    setNewCard(true);
    // console.log(response)
  }

  return (
    <div>
      <div>
        <h5>{props.list.name}</h5>
      </div>
      <div>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>

      <Toggler desc={"Create a Card"} onSubmit={addANewCard}/>
    </div>
  );
}

export default List;
