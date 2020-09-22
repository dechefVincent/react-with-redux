import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import * as authorActions from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/Spinner';

const ManageCoursePage = ({ authors, courses, history, loadAuthors, loadCourses, saveCourse, ...props }) => {
  const [course, setCourse] = useState({ ...props.course });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (courses.length === 0) {
      loadAuthors().catch((err) => console.error(`Loading authors failed ${err}`));
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadCourses().catch((err) => console.error(`Loading courses failed ${err}`));
    }
  }, [props.course]);

  const formIsValid = () => {
    const { title, authorId, category } = course;
    const _errors = {};

    if (!title) _errors.title = 'Title is required.';
    if (!authorId) _errors.authorId = 'Author is required.';
    if (!category) _errors.category = 'Category is required.';

    setErrors(_errors);
    return Object.keys(_errors).length;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((oldCourse) => ({
      ...oldCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success('Course saved.');
        history.push('/courses');
      })
      .catch((err) => {
        setSaving(false);
        setErrors({ onSave: err.message });
      });
  };

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm authors={authors} course={course} onChange={handleChange} onSave={handleSave} saving={saving} errors={errors} />
  );
};

ManageCoursePage.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    authorId: PropTypes.number,
    category: PropTypes.string,
  }),
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

ManageCoursePage.defaultProps = {
  course: undefined,
};

const mapStateToProps = ({ authors, courses }, ownProps) => {
  const { slug } = ownProps.match.params;
  const course = slug && courses.length > 0 ? courses.find((c) => c.slug === slug) || undefined : newCourse;
  return {
    course,
    courses: authors.length === 0 ? [] : courses.map((c) => ({ ...c, authorName: authors.find((a) => a.id === c.authorId).name })),
    authors,
  };
};
const mapDispatchToProps = {
  loadAuthors: authorActions.loadAuthors,
  loadCourses: courseActions.loadCourses,
  saveCourse: courseActions.saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
