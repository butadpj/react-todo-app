import React, { useState } from 'react';
import './App.css';

const Header = (props) => <header>{props.children}</header>

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

  const handleToggleIsDone = (selectedTodo) => {
    let finishedTodo;
    if (!selectedTodo.isDone) finishedTodo = {...selectedTodo, isDone: true}
    else finishedTodo = {...selectedTodo, isDone: false}

    setTodos(todos.map((todo) => 
      // Only return the updated todo (finishedTodo) 
      // and just copy the rest
      todo.id === finishedTodo.id ? finishedTodo : todo
    ));
  }

  const handleDeleteTodo = (selectedTodoId) => {
    setTodos(todos.filter((todo) => selectedTodoId !== todo.id))
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
      <TodoList 
        todos={todos} 
        toggleIsDone={handleToggleIsDone}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
