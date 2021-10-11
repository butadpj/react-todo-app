import Header from "./index";
import { shallow } from "enzyme";


describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((<Header>Todo App</Header>));
    expect(wrapper.contains('Todo App')).toBe(true);
  });
});