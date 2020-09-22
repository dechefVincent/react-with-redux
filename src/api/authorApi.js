import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/authors/`;

const getAuthors = () => fetch(baseUrl).then(handleResponse).catch(handleError);

export default getAuthors;
