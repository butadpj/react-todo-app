export const getAllTodos = state => state.todos.list

export const getTodo = todoId => 
  state => state.todos.list.find(todo => todo.id === todoId)