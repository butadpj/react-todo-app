import React from 'react';
import { TodoForm, TodoList, TodoNav } from './components';
import './App.css';

const App = () => {
  const Header = React.lazy(() => import('./components'))

  return (
    <div className="app">
      <Header>Todo App</Header>
      <TodoList />
      <TodoNav />
      <TodoForm />
    </div>
  );
}

export default App;
