const apiAccess = `key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN_KEY}`;

const urls = {
  getAllBoards: () => `/1/members/me/boards?${apiAccess}`,
  getAllLists: (boardId) =>
    `/1/boards/${boardId}/lists?cards=none&card_fields=all&filter=open&fields=all&${apiAccess}`,
  getAllCards: (listId) => `/1/lists/${listId}/cards?${apiAccess}`,
  getAModal: (cardId) => `/1/cards/${cardId}?fields=all&${apiAccess}`,
  getCheckLists: (checklistId) =>
    `/1/checklists/${checklistId}?cards?&${apiAccess}`,
  postAList: () => `/1/lists?${apiAccess}`,
  postACard: () => `/1/cards?${apiAccess}`,
  postACheckList: () => `/1/checklists?${apiAccess}`,
  postACheckItem: (checklistId) =>
    `/1/checklists/${checklistId}/checkItems?name=name&pos=bottom&checked=false&${apiAccess}`,
};

export default urls;
