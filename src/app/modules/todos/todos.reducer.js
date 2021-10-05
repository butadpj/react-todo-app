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
          isDone: false,
        }, 
      ]
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.list = state.list.filter((todo) => todoId !== todo.id)
    },
    toggleIsDoneState: (state, action) => {
      const finishedTodo = action.payload;
      state.list = state.list.map((todo) => 
      // Update the todo that matches finishedTodo's id
      todo.id === finishedTodo.id ? finishedTodo : todo
    )
    }
  }
})

export default todosReducer.reducer