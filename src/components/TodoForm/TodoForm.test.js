import { shallow, mount} from 'enzyme';
import sinon from 'sinon';
import TodoForm from './index';

describe("<TodoForm />", () => {
  it("renders without crashing", () => {
    shallow(<TodoForm />);
  });

  // it('simulates form submit event', () => {
  //   const onFormSubmit = sinon.spy();
  //   const wrapper = shallow(<TodoForm onSubmit={onFormSubmit} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onFormSubmit).toHaveProperty('name', '');
  // });
});
