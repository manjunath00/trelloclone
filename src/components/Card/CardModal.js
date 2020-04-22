import React, { useState, useEffect } from "react";

import { getACard, createACheckList } from "../../apis/trello";
import history from "../../history";
import Modal from "../common/Modal";
import CheckList from "../CheckList/CheckList";
import Toggler from "../common/Toggler";

function CardModal(props) {
  // console.log(props)

  const cardId = props.props.match.params.id;
  const [cardDetails, setCardDetails] = useState({});
  const [checkLists, setCheckLists] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getAllInCard(cardId);
  }, [cardId, isUpdated]);

  const getAllInCard = async (cardId) => {
    const cardDetails = await getACard(cardId);
    setCardDetails(cardDetails.data);
    setCheckLists(cardDetails.data.idChecklists);
    setIsUpdated(true);
  };

  const addACheckList = async (checkListName) => {
    const response = await createACheckList(cardId, checkListName);
    setIsUpdated(false);
    return response;
  };

  return (
    <Modal>
      <div>
        <div>{cardDetails.name}</div>
        <div>Description</div>
        <div>{cardDetails.desc}</div>
        {checkLists.map((item) => (
          <CheckList key={item} checkListId={item} idCard={cardId} />
        ))}
        <Toggler desc="Add a Checklist" onSubmit={addACheckList} />
      </div>
    </Modal>
  );
}

export default CardModal;
