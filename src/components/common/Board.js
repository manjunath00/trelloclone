import React from "react";
import {Link} from "react-router-dom";

const Board = ({boards}) => {
  return boards.map((board, index) => {
    return (
      <Link to={`/b/${board.shortLink}/${board.name}`} key={index}>
        <div key={index}>
          <div className="section__board">{board.name}</div>
        </div>
      </Link>
    );
  });
};

export default Board;
