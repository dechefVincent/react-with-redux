import React from 'react';
import { shallow } from 'enzyme';

import CourseForm from './CourseForm';

const renderCourseForm = (args) => {
  const defaultProps = { authors: [], course: {}, onChange: () => {}, onSave: () => {}, saving: false, errors: {} };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<CourseForm {...props} />);
};

it('render form and header', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find('form').length).toEqual(1);
  expect(wrapper.find('h2').text()).toEqual('Add Course');
});
