import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavIcon from './NavIcon';
import { actions } from '../../store/actions';
import { allItemsAre, isArrayEmpty } from '../../utils';

const { checkAllToggle, deleteAllTodos } = actions;

const TodoNav = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const [showNav, setShowNav] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleCheckAllToggle = () => {
    if (isArrayEmpty(todos)) return;
    // If all items are checked
    if (checkAll) {
      setCheckAll(false); // Make all uncheckable
      dispatch(checkAllToggle(false));
    } else {
      setCheckAll(true);
      dispatch(checkAllToggle(true));
    }
  };

  const handleToggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const handleDeleteAllTodos = () => {
    if (isArrayEmpty(todos)) return;
    if (window.confirm('Are you sure?')) dispatch(deleteAllTodos());
  };

  React.useEffect(() => {
    allItemsAre(todos, 'completed') ? setCheckAll(true) : setCheckAll(false);
  }, [dispatch, todos]);

  return (
    <div className={`todo-nav ${showNav ? 'todo-nav--show' : ''}`}>
      <NavIcon showNav={showNav} handleClick={handleToggleNav} />
      <div className='nav__buttons'>
        <button
          onClick={handleCheckAllToggle}
          className={`btn ${checkAll ? 'btn--primary' : 'btn--success'}
          ${isArrayEmpty(todos) ? 'btn--disabled' : ''}`}
        >
          {checkAll ? 'Uncheck all' : 'Check all'}
        </button>
        <button
          onClick={handleDeleteAllTodos}
          className={`btn btn--danger ${
            isArrayEmpty(todos) ? 'btn--disabled' : ''
          }`}
        >
          Delete all todos
        </button>
      </div>
    </div>
  );
};

export default TodoNav;
