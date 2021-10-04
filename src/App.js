import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from './app/modules/todos/todos.selectors';
import { addTodo, deleteTodo, toggleIsDoneState } from './app/modules/todos/todos.actions';

import { Header, TodoForm, TodoList } from './components';
import './App.css';

const App = () => {
  const [todoInputName, setTodoInputName] = useState('');
  
  const todos = useSelector(getAllTodos);
  const dispatch = useDispatch();
  
  const handleInputChange = (event) => {
    setTodoInputName(event.target.value);
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();

    if (todoInputName) {
      setTodoInputName('');  
      dispatch(addTodo(todoInputName))
    }
  }

  const handleToggleIsDone = (selectedTodo) => {
    let updatedTodo = {...selectedTodo, isDone: !selectedTodo.isDone}
    dispatch(toggleIsDoneState(updatedTodo));
  }

  const handleDeleteTodo = (selectedTodoId) => {
    dispatch(deleteTodo(selectedTodoId));
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
        value={todoInputName} 
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
