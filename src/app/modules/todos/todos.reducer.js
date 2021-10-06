import { createSlice } from "@reduxjs/toolkit";

export const todosReducer = createSlice({
  name: 'todos',
  initialState: {
    list: []
  }, 
  reducers: {
    addTodo: (state, action) => {
      const inputTodoName = action.payload;
      state.list = [
        ...state.list, // Copy of previous object in array
        {
          id: new Date().valueOf(), 
          name: inputTodoName,
          completed: false,
        }, 
      ]
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.list = state.list.filter((todo) => todoId !== todo.id)
    },
    toggleCompleted: (state, action) => {
      const selectedTodo = action.payload;
      const updatedTodo = {...selectedTodo, completed: !selectedTodo.completed}
      state.list = state.list.map((todo) => 
      // Update the todo that matches updatedTodo's id
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
    },
    checkAllTodos: (state, action) => {
      state.list = state.list.map(todo => {
        return {...todo, completed: true}
      });
    }
  }
})

export default todosReducer.reducer