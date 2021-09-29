import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

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
