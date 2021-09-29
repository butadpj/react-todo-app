import React, { useState } from 'react';
import './App.css';

const Header = (props) => <header>{props.children}</header>

const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.name}
            <div>
              <button 
                className="btn done-btn"
                onClick={() => props.toggleIsDone(todo)}
              >
                Done
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

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();

    if (todoInput) {
      setTodoInput('');    
      setTodos([
        {
          id: new Date().valueOf(), 
          name: todoInput,
          isDone: false,
        }, 
        ...todos // Copy of previous object in array
      ]);
    }
  }

  return (
    <div className="app">
      <Header>Todo App</Header>
      <br />
      <TodoForm 
        value={todoInput} 
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <TodoList />
    </div>
  );
}

export default App;
