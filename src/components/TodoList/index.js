import React from 'react';

const TodoList = (props) => {
  const todoNameBasedOnState = (todo) => {
    return (
      todo.isDone ? (
        <p className="isDone">
          {`${todo.name} ✅`}
        </p>
      ) : (
        <p>
          {todo.name}
        </p>
      )
    )
  }

  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todoNameBasedOnState(todo)}
            <div className="todo__buttons">
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
      {props.todos.length || (
        <p style={{textAlign: "center"}}>Seems quiet here... Add your first todo.</p>
      )}
  </ul>
  )
}

export default TodoList