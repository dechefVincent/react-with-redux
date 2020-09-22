import React from 'react';
import renderer from 'react-test-renderer';

import CourseForm from './CourseForm';
import { courses, authors } from '../../../tools/mockData';

it("set saving button label to 'saving...' when saving is true", () => {
  const tree = renderer.create(<CourseForm authors={authors} course={courses[0]} onChange={jest.fn()} onSave={jest.fn()} saving />);

  expect(tree).toMatchSnapshot();
});

it("set saving button label to 'save' when saving is false", () => {
  const tree = renderer.create(<CourseForm authors={authors} course={courses[0]} onChange={jest.fn()} onSave={jest.fn()} saving={false} />);

  expect(tree).toMatchSnapshot();
});
