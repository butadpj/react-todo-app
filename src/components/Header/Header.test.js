import Header from "./index";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";


describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("UI doesn't change unexpectedly", () => {
    const wrapper = mount(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((<Header>Todo App</Header>));
    expect(wrapper.contains('Todo App')).toBe(true);
  });
});