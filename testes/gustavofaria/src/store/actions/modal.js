export const openAddModal = () => ({ type: 'OPEN_ADD_MODAL', isOpen: true });
export const openDeleteModal = (visit) => ({ type: 'OPEN_DELETE_MODAL', isOpen: true, visit });
export const openEditModal = (visit) => ({ type: 'OPEN_EDIT_MODAL', isOpen: true, visit });
export const closeModal = () => ({ type: 'CLOSE_MODAL' });
