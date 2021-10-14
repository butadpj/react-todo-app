import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../../app/modules/todos/todos.selectors';
import { todoActions } from '../../app/modules/todos/todos.actions';

const TodoList = () => {
  const todos = useSelector(getAllTodos);

  const dispatch = useDispatch();

  const handleDeleteTodo = (selectedTodoId) => {
    dispatch(todoActions.deleteTodo(selectedTodoId));
  };

  const handleToggleCompleted = (selectedTodo) => {
    dispatch(todoActions.toggleCompleted(selectedTodo));
  };

  const todoNameBasedOnState = (todo) => {
    return todo.completed ? (
      <p className='completed'>{`${todo.name} ✅`}</p>
    ) : (
      <p>{todo.name}</p>
    );
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todoNameBasedOnState(todo)}
            <div className='todo__buttons'>
              <button
                className={`btn btn--primary 
                ${todo.completed ? 'undo-btn' : 'done-btn'}
                `}
                onClick={() => handleToggleCompleted(todo)}
              >
                {todo.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className='btn delete-btn'
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
      {!todos.length && (
        <p style={{ textAlign: 'center', padding: '0 1.5rem' }}>
          Seems quiet here... Add your first todo.
        </p>
      )}
    </ul>
  );
};

export default TodoList;
