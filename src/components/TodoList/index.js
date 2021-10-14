import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';

const { toggleCompleted, deleteTodo } = actions;

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
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
                onClick={() => toggleCompleted(todo)}
              >
                {todo.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className='btn delete-btn'
                onClick={() => deleteTodo(todo.id)}
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

export default connect(
  (state) => {
    return {
      todos: state.todoReducer.todos,
    };
  },
  (dispatch) => {
    return {
      toggleCompleted: (selectedTodo) =>
        dispatch(toggleCompleted(selectedTodo)),
      deleteTodo: (selectedTodoId) => dispatch(deleteTodo(selectedTodoId)),
    };
  },
)(TodoList);
