import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import BooksList from "../BooksList";

it("expect to render BooksList component", () => {
  const wrapper = shallow(<BooksList />);
  expect(toJson(wrapper)).toMatchSnapshot();
});