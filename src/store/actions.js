// ACTION TYPES
const actionType = {
  GET_TODOS: 'GET_TODOS',
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  DELETE_TODO: 'DELETE_TODO',
  CHECK_ALL_TOGGLE: 'CHECK_ALL_TOGGLE',
  DELETE_ALL_TODOS: 'DELETE_ALL_TODOS',
};

// Actual ACTIONS
const actions = {
  getTodos: () => {
    return {
      type: actionType.GET_TODOS,
    };
  },

  addTodo: (name) => {
    return {
      type: actionType.ADD_TODO,
      name,
    };
  },

  deleteTodo: (id) => {
    return {
      type: actionType.DELETE_TODO,
      id,
    };
  },

  toggleCompleted: (todo) => {
    return {
      type: actionType.TOGGLE_COMPLETED,
      todo,
    };
  },

  checkAllToggle: (status) => {
    return {
      type: actionType.CHECK_ALL_TOGGLE,
      status,
    };
  },

  deleteAllTodos: () => {
    return {
      type: actionType.DELETE_ALL_TODOS,
    };
  },
};

export { actionType, actions };
