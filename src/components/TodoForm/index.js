import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../app/modules/todos/todos.actions';

const TodoForm = () => {
  const [todoInputName, setTodoInputName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTodoInputName(event.target.value);
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();

    if (todoInputName) {
      setTodoInputName('');  
      dispatch(todoActions.addTodo(todoInputName))
    }
  }

  return (
    <form className="todo-form" onSubmit={handleInputSubmit}>
      <input 
        autoFocus
        className="form__input" 
        type="text" 
        value={todoInputName} 
        placeholder="Add your new todo" 
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn--success add-btn">Add</button>
    </form>
  )
}

export default TodoForm