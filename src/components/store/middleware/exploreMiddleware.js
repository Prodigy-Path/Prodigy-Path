/** @format */

import fetchApi from '../../../utility/fetchApi';

const exploreMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'search') {
    let url = `${process.env.REACT_APP_SERVER}/users`;
    let body = null;
    let method = 'get';
    let response = await fetchApi(url, body, method);

    if (!response) {
      response = [];
    }
    if (action.payload.userRole === 'protege') {
      action.payload = response.filter((user) => user.role === 'mentor');
    } else {
      action.payload = response.filter((user) => user.role === 'protege');
    }
  }
  next(action);
};

export default exploreMiddleware;
