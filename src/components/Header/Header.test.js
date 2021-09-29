import React from 'react';
import Header from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Header />);
});
