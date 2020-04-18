import React, { useState, useEffect } from "react";

import history from "../../history";
import Modal from "../common/Modal";
import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";
import CheckList from "../CheckList/CheckList";

function CardModal(props) {
  const cardId = props.match.params.id;
  const [cardDetails, setCardDetails] = useState({});
  const [checkLists, setCheckLists] = useState([]);

  console.log(cardId);
  useEffect(() => {
    getACard(cardId);
  }, []);

  const getACard = async (cardId) => {
    const cardDetails = await trello.get(urls.getAModal(cardId));
    setCardDetails(cardDetails.data);
    setCheckLists(cardDetails.data.idChecklists);
    // console.log(cardDetails.data.idChecklists);
    // const checkLists = await trello.get(urls.getCheckLists(cardId))
  };
  console.log(cardDetails)
  console.log(checkLists);
  // console.log(props.match.params.id);
  return (
    <Modal>
      <div>
        <div>{cardDetails.name}</div>
        <div>Description</div>
        <div>{cardDetails.desc}</div>
        {checkLists.map((item) => (
          <CheckList key={item} checkListId={item} />
        ))}
      </div>
    </Modal>
  );
}

export default CardModal;
