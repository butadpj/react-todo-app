import TodoList from "./index";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const todoList = [
  { id: 1, name: 'hey', isDone: false },
  { id: 2, name: 'jude', isDone: false },
  { id: 3, name: 'dont', isDone: false },
  { id: 4, name: 'make', isDone: false },
  { id: 5, name: 'it bad', isDone: true },
];

describe('<TodoList />', () => {
  it("renders without crashing", () => {
    shallow(<TodoList />);
  });

  it("UI doesn't change unexpectedly", () => {
    const withTodos = mount(<TodoList todos={todoList}/>);
    expect(toJson(withTodos)).toMatchSnapshot();

    const noTodos = mount(<TodoList />);
    expect(toJson(noTodos)).toMatchSnapshot();
  });

  it("Display <EmptyTodoMessage /> when there's no todos", () => {
    const undefinedTodos = mount(<TodoList />);
    expect(undefinedTodos.find('EmptyTodoMessage').exists()).toBe(true);

    const emptyTodos = mount(<TodoList todos={[]}/>);
    expect(emptyTodos.find('EmptyTodoMessage').exists()).toBe(true);
  });

  it("Render <TodoItem /> for each item in the list", () => {
    const wrapper = mount(<TodoList todos={todoList}/>);
    expect(wrapper.find('TodoItem').exists()).toBe(true);
    expect(wrapper.find('TodoItem')).toHaveLength(todoList.length);
  });
});