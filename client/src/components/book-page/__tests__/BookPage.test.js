import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import BookPage from "../BookPage";

it("expect to render BookPage component", () => {
  const wrapper = shallow(<BookPage slug="testSlug" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
