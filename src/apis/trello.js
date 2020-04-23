import urls from "./getUrls";
import trello from "./trelloapi";

/* boards */
export const getAllBoards = async () => {
  const response = await trello.get(urls.getAllBoards());
  return response;
};

/* lists */

export const getAllLists = async (boardId) => {
  const response = await trello.get(urls.getAllLists(boardId));
  return response;
};

export const createAList = async (idBoard, listName) => {
  const body = {
    idBoard,
    name: listName,
  };
  const response = await trello.post(urls.postAList(), body);
  return response;
};

/* cards */

export const getAllCards = async (listId) => {
  const response = await trello.get(urls.getAllCards(listId));
  return response;
};

export const createACard = async (listId, cardName) => {
  const body = {
    idList: listId,
    name: cardName,
  };
  const response = await trello.post(urls.postACard(), body);
  return response;
};

export const getACard = async (cardId) => {
  const response = await trello.get(urls.getAModal(cardId));
  return response;
};

/* Checklists */

export const createACheckList = async (cardId, checkListName) => {
  const body = {
    idCard: cardId,
    name: checkListName,
  };
  const response = await trello.post(urls.postACheckList(), body);
  return response;
};

export const deleteACheckList = async (checkListId) => {
  const response = await trello.delete(urls.deleteACheckList(checkListId));
  return response;
};

/* checkitems */

export const getAllCheckitems = async (checkListId) => {
  const response = await trello.get(urls.getCheckLists(checkListId));
  return response;
};

export const createCheckItem = async (checkListId, checkItemName) => {
  const body = {
    id: checkListId,
    name: checkItemName,
  };
  const response = await trello.post(urls.postACheckItem(checkListId), body);
  return response;
};

export const toggleCheckItem = async (idCard, idCheckItem, isChecked) => {
  const response = await trello.put(
    urls.toggleACheckItem(idCard, idCheckItem, isChecked)
  );
  return response;
};

export const deleteCheckItem = async (checkListId, idCheckItem) => {
  const response = await trello.delete(
    urls.deleteACheckItem(checkListId, idCheckItem)
  );
  return response;
};
