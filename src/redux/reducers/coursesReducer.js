import initialState from './initialState';
import types from '../actions/actionTypes';

const coursesReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.courseId);
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) => (action.course.id === course.id ? action.course : course));
    default:
      return state;
  }
};

export default coursesReducer;
