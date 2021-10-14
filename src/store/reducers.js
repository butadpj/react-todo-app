import { combineReducers } from 'redux';
import { actionType } from './actions';

const { 
    GET_TODOS, 
    ADD_TODO, 
    TOGGLE_COMPLETED, 
    DELETE_TODO, 
    CHECK_ALL_TOGGLE,
    DELETE_ALL_TODOS,
} = actionType;

const initialState = {
  todos: [{ id: 0, name: 'Default todo', completed: false }],
  extraProps: 'Just an extra props you know..',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return state.todos;

    case ADD_TODO: {
      const todoName = action.name;

      const newTodo = {
        id: new Date().valueOf(), // generate unique id
        name: todoName,
        completed: false,
      };

      return { ...state, todos: [...state.todos, newTodo] };
    }

    case DELETE_TODO: {
      const todoId = action.id;
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);

      return { ...state, todos: newTodos };
    }

    case TOGGLE_COMPLETED: {
      const selectedTodo = action.todo;
      const updatedTodo = {
        ...selectedTodo,
        completed: !selectedTodo.completed,
      };

      const newTodos = state.todos.map((todo) =>
        todo.id === selectedTodo.id ? updatedTodo : todo,
      );

      return { ...state, todos: newTodos };
    }

    case CHECK_ALL_TOGGLE: {
      const status = action.status;
      const newTodos = state.todos.map(todo => ({...todo, completed: status}));

      return { ...state, todos: newTodos };
    } 

    case DELETE_ALL_TODOS: {
      return { ...state, todos: [] };
    }

    default:
      return state;
  }
};

export default combineReducers({
  todoReducer,
});
