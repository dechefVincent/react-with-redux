import types from './actionTypes';

export const apiCallError = () => ({
  type: types.API_CALL_ERROR,
});

export const beginApiCall = () => ({
  type: types.BEGIN_API_CALL,
});
