import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { card } = props;
  console.log(card);
  // console.log(card.idChecklists);

  return (
    <Link to={`/c/${card.id}/${card.name}`}>
      <div className="card-container" card={card}>
        {card.name}
      </div>
    </Link>
  );
}

export default Card;
