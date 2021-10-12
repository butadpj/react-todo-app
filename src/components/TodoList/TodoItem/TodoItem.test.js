import TodoItem from "./index";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const sampleTodo = { id: 1, name: 'Sample Todo', isDone: false };

describe('<TodoItem />', () => {
  it("renders without crashing", () => {
    shallow(<TodoItem todo={sampleTodo}/>);
  });

  it("UI doesn't change unexpectedly", () => {
    const wrapper = mount(<TodoItem todo={sampleTodo}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Todo name is changing based on todo.isDone property", () => {
    const notCompletedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: false}}/>);
    expect(notCompletedTodo.find('p').text()).toBe(sampleTodo.name);

    const completedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: true}}/>);
    expect(completedTodo.find('p').text()).toBe(`${sampleTodo.name} ✅`);
  });

  it("Toggle button's name is changing based on todo.isDone property", () => {
    const notCompletedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: false}}/>);
    expect(notCompletedTodo.find('.toggle-btn').text()).toBe('Done');

    const completedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: true}}/>);
    expect(completedTodo.find('.toggle-btn').text()).toBe('Undo');
  });

  it("Toggle button's className is changing based on todo.isDone property", () => {
    const notCompletedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: false}}/>);
    expect(notCompletedTodo.find('.toggle-btn').hasClass('done-btn')).toBe(true);

    const completedTodo = mount(<TodoItem todo={{...sampleTodo, isDone: true}}/>);
    expect(completedTodo.find('.toggle-btn').hasClass('undo-btn')).toBe(true);
  });
});