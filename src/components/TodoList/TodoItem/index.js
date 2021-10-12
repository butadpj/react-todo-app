import React from 'react';

const TodoItem = (props) => {
  const todoNameBasedOnState = (todo) => {
    return todo.isDone ? (
      <p className='isDone'>{`${todo.name} ✅`}</p>
    ) : (
      <p>{todo.name}</p>
    );
  };

  return (
    <li>
      {todoNameBasedOnState(props.todo)}
      <div className='todo__buttons'>
        <button
          className={`btn btn--primary toggle-btn ${
            props.todo.isDone ? 'undo-btn' : 'done-btn'
          }`}
          onClick={() => props.toggleIsDone(props.todo)}
        >
          {props.todo.isDone ? 'Undo' : 'Done'}
        </button>
        <button
          className='btn delete-btn'
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem