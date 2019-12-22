import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import Spinner from "../Spinner";

it("expect to render Spinner component", () => {
  const wrapper = shallow(<Spinner />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
