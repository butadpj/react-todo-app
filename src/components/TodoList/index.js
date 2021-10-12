import React from 'react';
import EmptyTodoMessage from './EmptyTodoMessage';
import TodoItem from './TodoItem';

const TodoList = ({todos = [], toggleIsDone, deleteTodo}) => {
  return (
    <ul className='todo__list'>
      {todos.length <= 0 ? (
        <EmptyTodoMessage />
      ) : (
        todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo} 
              toggleIsDone={toggleIsDone}
              deleteTodo={deleteTodo}
            />
          )
        })
      )}
    </ul>
  );
};

export default TodoList;
