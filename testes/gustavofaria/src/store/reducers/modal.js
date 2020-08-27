const INITIAL_STATE = {
  visit: null,
  addModal: false,
  deleteModal: false,
  editModal: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_ADD_MODAL':
      return { ...state, addModal: action.isOpen };

    case 'OPEN_DELETE_MODAL':
      return { ...state, deleteModal: action.isOpen, visit: action.visit };

    case 'OPEN_EDIT_MODAL':
      return { ...state, editModal: action.isOpen, visit: action.visit };

    case 'CLOSE_MODAL':
      return INITIAL_STATE;

    default: return state;
  }
};
