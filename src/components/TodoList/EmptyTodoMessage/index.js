import React from 'react';

const EmptyTodoMessage = () => {
  return (
    <p className='empty-todo-message' style={{ textAlign: 'center', padding: '0 1.5rem' }}>
      Seems quiet here... Add your first todo.
    </p>
  );
};

export default EmptyTodoMessage
