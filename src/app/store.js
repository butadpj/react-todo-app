import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './modules/todos/todos.reducer';

export default configureStore({
  reducer: {
    todos: todosReducer
  }
})