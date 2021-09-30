import React from 'react';
import TodoList from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<TodoList />);
});
