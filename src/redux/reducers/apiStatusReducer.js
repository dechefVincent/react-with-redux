import initialState from './initialState';
import types from '../actions/actionTypes';

const apiStatusReducer = (state = initialState.apiCallsInProgress, action) => {
  if (action.type === types.BEGIN_API_CALL) return state + 1;
  if (action.type.substring(action.type.length - 8) === '_SUCCESS' || action.type === types.API_CALL_ERROR) return state - 1;
  return state;
};

export default apiStatusReducer;
