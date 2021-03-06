import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions';

const { addTodo } = actions;

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoInputName, setTodoInputName] = React.useState('');

  const handleInputChange = (event) => {
    setTodoInputName(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();

    if (todoInputName) {
      setTodoInputName('');
      dispatch(addTodo(todoInputName));
    }
  };

  return (
    <form className='todo-form' onSubmit={handleInputSubmit}>
      <input
        autoFocus
        className='form__input'
        type='text'
        value={todoInputName}
        placeholder='Add your new todo'
        onChange={handleInputChange}
      />
      <button type='submit' className='btn btn--success add-btn'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
