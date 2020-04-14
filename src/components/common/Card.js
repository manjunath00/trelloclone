import React from "react";

function Card(props) {
  return <div className="card-container">{props.card.name}</div>;
}

export default Card;
