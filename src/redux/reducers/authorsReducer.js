import initialState from './initialState';
import types from '../actions/actionTypes';

const authorsReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};

export default authorsReducer;
