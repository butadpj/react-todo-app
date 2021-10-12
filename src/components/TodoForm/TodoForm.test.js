import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoForm from './index';

describe("<TodoForm />", () => {
  it("renders without crashing", () => {
    shallow(<TodoForm />);
  });

  it("UI doesn't change unexpectedly", () => {
    const wrapper = shallow(<TodoForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('input value is based on props', () => {
    const onChangeMock = jest.fn()
      .mockImplementation((input, component) => 
        component.setProps({ value: input }));

    const wrapper = mount(
      <TodoForm 
        value={'New Todo'} 
        onChange={() => onChangeMock('Newest Todo', wrapper)}
      />
    );

    // Input's value should be -> 'New Todo'
    expect(wrapper.find('input').props().value).toBe('New Todo');

    // Call onChangeMock() -- Change props.value from 'New Todo' -> 'Newest Todo'
    wrapper.find('input').simulate('change');

    // Input's value should be -> 'Newest Todo'
    expect(wrapper.find('input').props().value).toBe('Newest Todo');
  });

  it('clears the input after submitting form', () => {
    const onChangeMock = jest.fn();
    
    const onSubmitMock = jest.fn()
      .mockImplementation(component => 
        component.setProps({ value: '' })); 

    const wrapper = mount(
      <TodoForm 
        value={'New Todo'} 
        onChange={onChangeMock}
        onSubmit={() => onSubmitMock(wrapper)}
      />
    );

    // Input's value should be -> 'New Todo'
    expect(wrapper.find('input').props().value).toBe('New Todo');

    // Call onChangeMock() -- Change props.value from 'New Todo' -> 'Newest Todo'
    wrapper.find('form').simulate('submit');

    // Input's value should be -> 'Newest Todo'
    expect(wrapper.find('input').props().value).toBe('');
  });
});
