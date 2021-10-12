import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("UI doesn't change unexpectedly", () => {
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});