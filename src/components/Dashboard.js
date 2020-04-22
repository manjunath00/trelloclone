import React, { useEffect, useState } from "react";

import Board from "./common/Board";
import { getAllBoards } from "../apis/trello";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    Boards();
  }, []);

  const Boards = async () => {
    const response = await getAllBoards();
    setBoards(response.data);
  };

  return (
    <div className="section__boards__list">
      <Board boards={boards} />
    </div>
  );
};

export default Dashboard;
