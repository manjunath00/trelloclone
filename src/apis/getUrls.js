const apiAccess = `key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN_KEY}`;

const urls = {
  // GET requests

  getAllBoards: () => `/1/members/me/boards?${apiAccess}`,
  getAllLists: (boardId) =>
    `/1/boards/${boardId}/lists?cards=none&card_fields=all&filter=open&fields=all&${apiAccess}`,
  getAllCards: (listId) => `/1/lists/${listId}/cards?${apiAccess}`,
  getAModal: (cardId) => `/1/cards/${cardId}?fields=all&${apiAccess}`,
  getCheckLists: (checklistId) =>
    `/1/checklists/${checklistId}?cards?&${apiAccess}`,

  // POST requests

  postAList: () => `/1/lists?${apiAccess}`,
  postACard: () => `/1/cards?${apiAccess}`,
  postACheckList: () => `/1/checklists?${apiAccess}`,
  postACheckItem: (checklistId) =>
    `/1/checklists/${checklistId}/checkItems?name=name&pos=bottom&checked=false&${apiAccess}`,

  // DELETE requests
  deleteACheckList: (checkListId) =>
    `/1/checklists/${checkListId}?${apiAccess}`,

  // PUT requests
  toggleACheckItem: (idCard, idCheckItem, state) =>
    `/1/card/${idCard}/checkItem/${idCheckItem}?state=${state}&${apiAccess}`,
    // PUT /1/cards/{id}/checkItem/{idCheckItem}
};

export default urls;
