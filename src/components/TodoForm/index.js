import React from 'react';

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input 
        className="todo__input" 
        type="text" 
        value={props.value} 
        placeholder="Add your new todo" 
        onChange={props.onChange}
      />
      <button type="submit" className="add-btn btn">Add</button>
    </form>
  )
}

export default TodoForm