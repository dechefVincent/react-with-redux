import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as authorActions from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';
import CourseList from './CourseList';
import Spinner from '../common/Spinner';

const CoursesPage = ({ authors, courses, loading, deleteCourse, loadAuthors, loadCourses }) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadAuthors().catch((err) => console.error(`Loading authors failed ${err}`));
    }
    if (authors.length === 0) {
      loadCourses().catch((err) => console.error(`Loading courses failed ${err}`));
    }
  }, []);

  const handleDeleteCourse = ({ id }) => {
    toast.success('Course deleted.');
    deleteCourse(id);
  };

  return (
    <>
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link className="btn btn-primary" style={{ marginBottom: 20 }} to="/course">
            Add course
          </Link>
          <CourseList courses={courses} onDeleteCourse={handleDeleteCourse} />
        </>
      )}
    </>
  );
};

CoursesPage.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ apiStatus, authors, courses }) => ({
  authors,
  courses: authors.length === 0 ? [] : courses.map((c) => ({ ...c, authorName: authors.find((a) => a.id === c.authorId).name })),
  loading: !!apiStatus,
});
const mapDispatchToProps = {
  deleteCourse: courseActions.deleteCourse,
  loadAuthors: authorActions.loadAuthors,
  loadCourses: courseActions.loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
