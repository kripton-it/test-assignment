import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

import BookItem from "../BookItem";

const book = {
  title: 'title',
  author: 'author',
  cover: 'cover',
  synopsis: 'synopsis',
  slug: 'slug'
};

it("expect to render BookItem component", () => {
  const wrapper = shallow(<BookItem book={book} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
