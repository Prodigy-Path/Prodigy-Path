/** @format */

import fetchApi from '../../../utility/fetchApi';
const signUpMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'signUp') {
    let url = `${process.env.REACT_APP_SERVER}/signup`;
    let body = {
      username: action.payload.username,
      name: action.payload.name,
      password: action.payload.password,
      role: action.payload.role,
    };
    let method = 'post';
    let config = null;
    await fetchApi(url, body, method, config);
  }
  next(action);
};

export default signUpMiddleware;
