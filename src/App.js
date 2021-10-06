import React from 'react';
import { TodoForm, TodoList, TodoNav } from './components';
import ErrorBoundary from './components/errors/ErrorBoundary';
import './App.css';

const App = () => {
  const Header = React.lazy(() => import('./components/Header'))

  return (
    <div className="app">
      <React.Suspense fallback={<h2>Loading Header...</h2>}>
        <Header>Todo App</Header>
      </React.Suspense>
      <TodoList />
      <React.Suspense fallback={<h2>Loading Nav...</h2>}>
        <ErrorBoundary>
          <TodoNav />
        </ErrorBoundary>
      </React.Suspense>
      <TodoForm />
    </div>
  );
}

export default App;
