import { combineReducers } from 'redux';

import apiStatus from './apiStatusReducer';
import authors from './authorsReducer';
import courses from './coursesReducer';

const rootReducer = combineReducers({
  apiStatus,
  authors,
  courses,
});

export default rootReducer;
