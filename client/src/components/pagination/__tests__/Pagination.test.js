import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import Pagination from "../Pagination";

const props1 = {
  currentPage: 1,
  pageNumber: 5,
  onNextClick: () => { },
  onPrevClick: () => { }
};

const props2 = {
  currentPage: 5,
  pageNumber: 5,
  onNextClick: () => { },
  onPrevClick: () => { }
};

const props3 = {
  currentPage: 3,
  pageNumber: 5,
  onNextClick: () => { },
  onPrevClick: () => { }
};

describe("Pagination component:", () => {
  it("expect to render for currentPage === 1", () => {
    const wrapper = shallow(<Pagination {...props1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("expect to render for currentPage === pageNumber", () => {
    const wrapper = shallow(<Pagination {...props2} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("expect to render for currentPage !== 1 and !== pageNumber", () => {
    const wrapper = shallow(<Pagination {...props3} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
