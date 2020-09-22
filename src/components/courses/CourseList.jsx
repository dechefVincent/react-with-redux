import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseList = ({ courses, onDeleteCourse }) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => (
        <tr key={course.id}>
          <td>
            <a className="btn btn-light" href={`http://pluralsight.com/courses/${course.slug}`}>
              Watch
            </a>
          </td>
          <td>
            <Link to={`/course/${course.slug}`}>{course.title}</Link>
          </td>
          <td>{course.authorName}</td>
          <td>{course.category}</td>
          <td>
            <button type="button" className="btn btn-outline-danger" onClick={() => onDeleteCourse(course)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteCourse: PropTypes.func.isRequired,
};

export default CourseList;
