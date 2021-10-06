import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../../app/modules/todos/todos.selectors';
import { todoActions } from '../../app/modules/todos/todos.actions';

const getIcon = (icon) => {
  const iconBaseUrl = 'https://img.icons8.com/nolan/32/';
  const suffix = '.png';
  return `${iconBaseUrl}${icon}${suffix}`
}

const allItemsAreChecked = (array) => 
  array.every(item => item.completed)


const isArrayEmpty = (array) => {
  return array.length ? false : true
}

const TodoNav = () => {
  const todos = useSelector(getAllTodos);

  const [showNav, setShowNav] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);
  
  const dispatch = useDispatch();

  const handleCheckAllToggle = () => {
    if (isArrayEmpty(todos)) return;

    // If all items are checked -> Make them uncheckable
    if (checkAll) {
      setCheckAll(false);
      dispatch(todoActions.checkAllToggle(false));
    } else {
      setCheckAll(true);
      dispatch(todoActions.checkAllToggle(true));
    }
    
  }

  const handleToggleNav = () => {
    setShowNav(prev => !prev);
  }

  const handleDeleteAllTodos = () => {
    if (isArrayEmpty(todos)) return;

    if (window.confirm('Are you sure?'))
      dispatch(todoActions.deleteAllTodos());
  }

  React.useEffect(() => {
    allItemsAreChecked(todos) ? 
      setCheckAll(true) : setCheckAll(false)
  }, [dispatch, todos])

  return (
    <>
      <img 
        onClick={handleToggleNav}
        className="nav__icon"
        alt="nav-icon" 
        src={`${showNav ? getIcon('double-right') : getIcon('double-left')}`}
      />
      <div className={`todo-nav ${showNav ? 'todo-nav--show' : ''}`}>
        <div className="nav__buttons">

          <button 
            onClick={handleCheckAllToggle} 
            className={`btn ${checkAll ? 'btn--primary' : 'btn--success'}
            ${isArrayEmpty(todos) ? 'btn--disabled' : ''}`}>
              {checkAll ? 'Uncheck all' : 'Check all'}
          </button>
          <button 
            onClick={handleDeleteAllTodos} 
            className={`btn btn--danger ${isArrayEmpty(todos) ? 'btn--disabled' : ''}`}>
              Delete all todos
          </button>
        </div>  
      </div>
    </>
  )
}

export default TodoNav
