import React, { useState, useEffect } from "react";

import history from "../../history";
import Modal from "../common/Modal";
import urls from "../../apis/getUrls";
import trello from "../../apis/trelloapi";
import CheckList from "../CheckList/CheckList";
import Toggler from "../common/Toggler";

function CardModal(props) {
  // console.log(props)

  const cardId = props.props.match.params.id;
  const [cardDetails, setCardDetails] = useState({});
  const [checkLists, setCheckLists] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  // console.log(cardId);
  useEffect(() => {
    getACard(cardId);
  }, [cardId, isUpdated]);

  const getACard = async (cardId) => {
    const cardDetails = await trello.get(urls.getAModal(cardId));
    setCardDetails(cardDetails.data);
    setCheckLists(cardDetails.data.idChecklists);
    setIsUpdated(true);
  };

  const addACheckList = async (checkListName) => {
    const body = {
      idCard: cardId,
      name: checkListName,
    };
    const response = await trello.post(urls.postACheckList(), body);
    setIsUpdated(false);
    console.log(response);
  };

  return (
    <Modal>
      <div>
        <div>{cardDetails.name}</div>
        <div>Description</div>
        <div>{cardDetails.desc}</div>
        {checkLists.map((item) => (
          <CheckList key={item} checkListId={item} idCard={cardId}/>
        ))}
        <Toggler desc="Add a Checklist" onSubmit={addACheckList} />
      </div>
    </Modal>
  );
}

export default CardModal;
