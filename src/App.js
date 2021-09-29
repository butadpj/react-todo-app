import './App.css';

const Header = (props) => <header>{props.children}</header>

const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.name}
            <div>
              <button 
                className="btn done-btn"
                onClick={() => props.toggleIsDone(todo)}
              >
                Done
              </button> 
              <button 
                className="btn delete-btn"
                onClick={() => props.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li> 
        )
      })}
  </ul>
  )
}

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input 
        className="todo__input" 
        type="text" 
        value={props.value} 
        placeholder="Add your new todo" 
        onChange={props.onChange}
      />
      <button type="submit" className="add-btn btn">Add</button>
    </form>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header>Todo App</Header>
      <br />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
