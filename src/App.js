import React, { useState } from 'react';
import { Header, TodoForm, TodoList } from './components';
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
        ...todos, // Copy of previous object in array
        {
          id: new Date().valueOf(), 
          name: todoInput,
          isDone: false,
        }, 
      ]);
    }
  }

  const handleToggleIsDone = (selectedTodo) => {
    let updatedTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
    setTodos(todos.map((todo) => 
      // Only return the updated todo (finishedTodo) 
      // and just copy the rest
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  }

  const handleDeleteTodo = (selectedTodoId) => {
    setTodos(todos.filter((todo) => selectedTodoId !== todo.id))
  }

  return (
    <div className="app">
      <Header>Todo App</Header>
      <TodoList 
        todos={todos} 
        toggleIsDone={handleToggleIsDone}
        deleteTodo={handleDeleteTodo}
      />
      <TodoForm 
        value={todoInput} 
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
