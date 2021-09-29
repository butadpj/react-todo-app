import React from 'react';

const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <li key={todo.id} className={todo.isDone ? 'isDone' : ''}>
            {todo.isDone ? `${todo.name} ✅` : todo.name}
            <div>
              <button 
                className="btn done-btn"
                onClick={() => props.toggleIsDone(todo)}
              >
                {todo.isDone ? 'Undo' : 'Done'}
              </button> 
              <button 
                className="btn delete-btn"
                onClick={() => props.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li> 
        )
      })}
  </ul>
  )
}

export default TodoList