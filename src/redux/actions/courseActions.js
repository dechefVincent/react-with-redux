import types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { apiCallError, beginApiCall } from './apiStatusActions';

const deleteCourseOptimistic = (courseId) => ({ type: types.DELETE_COURSE_OPTIMISTIC, courseId });

export const deleteCourse = (courseId) => (dispatch) => {
  dispatch(deleteCourseOptimistic(courseId));
  courseApi.deleteCourse(courseId);
};

const loadCoursesSuccess = (courses) => ({ type: types.LOAD_COURSES_SUCCESS, courses });

export const loadCourses = () => (dispatch) => {
  dispatch(beginApiCall());
  return courseApi
    .getCourses()
    .then((courses) => dispatch(loadCoursesSuccess(courses)))
    .catch((err) => {
      dispatch(apiCallError(err));
      throw err;
    });
};

const createCourseSuccess = (course) => ({ type: types.CREATE_COURSE_SUCCESS, course });
const updateCourseSuccess = (course) => ({ type: types.UPDATE_COURSE_SUCCESS, course });

export const saveCourse = (course) => (dispatch) => {
  dispatch(beginApiCall());
  return courseApi
    .saveCourse(course)
    .then((savedCourse) => dispatch(course.id ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse)))
    .catch((err) => {
      dispatch(apiCallError(err));
      throw err;
    });
};
