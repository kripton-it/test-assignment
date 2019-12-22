import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import Header from "../Header";

const props1 = {
  location: {
    pathname: '/'
  }
};

const props2 = {
  location: {
    pathname: '/qwerty'
  }
};

describe("Header component:", () => {
  it("expect to render with path === '/'", () => {
    const wrapper = shallow(<Header {...props1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("expect to render with path !== '/'", () => {
    const wrapper = shallow(<Header {...props2} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
