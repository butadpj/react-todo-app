import { todosReducer } from "./todos.reducer";

export const { 
      addTodo, 
      checkAllTodos, 
      deleteTodo, 
      toggleCompleted 
    } = todosReducer.actions;
