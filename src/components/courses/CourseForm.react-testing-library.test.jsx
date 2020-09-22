import React from 'react';
import { cleanup, render } from '@testing-library/react';

import CourseForm from './CourseForm';

afterEach(cleanup);

const renderCourseForm = (args) => {
  const defaultProps = { authors: [], course: {}, onChange: () => {}, onSave: () => {}, saving: false, errors: {} };
  const props = { ...defaultProps, ...args };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return render(<CourseForm {...props} />);
};

it("should render 'Add Course' header", () => {
  const { getByText } = renderCourseForm();
  getByText('Add Course');
});
