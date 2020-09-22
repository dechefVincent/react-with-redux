import types from './actionTypes';
import getAuthors from '../../api/authorApi';
import { apiCallError, beginApiCall } from './apiStatusActions';

const loadAuthorsSuccess = (authors) => ({ type: types.LOAD_AUTHORS_SUCCESS, authors });

export const loadAuthors = () => (dispatch) => {
  dispatch(beginApiCall());
  return getAuthors()
    .then((authors) => dispatch(loadAuthorsSuccess(authors)))
    .catch((err) => {
      dispatch(apiCallError(err));
      throw err;
    });
};
