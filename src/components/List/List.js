import React, { useEffect, useState } from "react"; 

import { getAllCards, createACard } from "../../apis/trello";
import Card from "../Card/Card";
import Toggler from "../common/Toggler";

function List(props) {
  const [listId, setListId] = useState(props.id);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState(false);

  useEffect(() => {
    allCards(listId);
  }, [listId, newCard]);

  const allCards = async (listId) => {
    const response = await getAllCards(listId);
    setCards(response.data);
    return response;
  };

  const addANewCard = async (cardName) => {
    const response = await createACard(listId, cardName);
    setNewCard(true);
    return response;
  };

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

      <Toggler desc={"Create a Card"} onSubmit={addANewCard} />
    </div>
  );
}

export default List;
