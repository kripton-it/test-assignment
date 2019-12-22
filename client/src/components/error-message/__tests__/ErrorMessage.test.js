import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import ErrorMessage from "../ErrorMessage";

it("expect to render ErrorMessage component", () => {
  const wrapper = shallow(<ErrorMessage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
