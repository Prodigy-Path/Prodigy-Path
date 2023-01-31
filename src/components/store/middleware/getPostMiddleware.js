/** @format */

import fetchApi from '../../../utility/fetchApi';
const getPostMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'getPost') {
    let url = `${process.env.REACT_APP_SERVER}/posts`;
    let body = null;
    let method = 'get';
    let config = null;
    let response = await fetchApi(url, body, method, config);

    action.payload = response;
  }
  next(action);
};

export default getPostMiddleware;
