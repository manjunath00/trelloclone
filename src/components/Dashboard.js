import React, {useEffect, useState} from "react";

import trello from "../apis/trelloapi";
import Board from "./common/Board";
import urls from "../apis/getUrls";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllBoards = async () => {
    const response = await trello.get(urls.getAllBoards());
    setBoards(response.data);
  };

  return (
    <div className="section__boards__list">
      <Board boards={boards} />
    </div>
  );
};

export default Dashboard;
