import React from 'react'
import { useDispatch } from 'react-redux';
import { checkAllTodos } from '../../app/modules/todos/todos.actions';

const TodoNav = () => {
  const dispatch = useDispatch();

  const handleCheckAllTodos = () => {
    dispatch(checkAllTodos());
  }

  return (
    <div className="todo-nav">
      <img 
        className="nav__icon"
        alt="nav-icon" 
        src="https://img.icons8.com/ios-glyphs/30/000000/double-left--v1.png"
      />
      <div className="nav__buttons">
        <button 
          onClick={handleCheckAllTodos} 
          className="btn btn--success">
            Check all todos
        </button>
        <button 
          // onClick={handleCheckAllTodos} 
          className="btn btn--danger">
            Delete all todos
        </button>
      </div>  
    </div>
  )
}

export default TodoNav
