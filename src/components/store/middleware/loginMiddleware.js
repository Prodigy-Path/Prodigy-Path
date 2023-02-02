/** @format */

import fetchApi from '../../../utility/fetchApi';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const expireDate = new Date();
expireDate.setSeconds(expireDate.getSeconds() + 30);

const loginMiddleware = (store) => (next) => async (action) => {

  if (action?.payload?.action === 'login') {
    let url = `${process.env.REACT_APP_SERVER}/login`;
    let body = null;
    let method = 'post';
    let config = {
      username: action.payload.username,
      password: action.payload.password,
    };
    let response = await fetchApi(url, body, method, config);
    const checked = store.getState().login.checked
    if (checked === true) {
      const expireDate = new Date();
      expireDate.setMonth(expireDate.getMonth() + 6);
      cookies.set('user', response, { path: '/', expires: expireDate });
    } else if (checked === false) {
      const expireDate = new Date();
      expireDate.setMinutes(expireDate.getMinutes() + 30);
      cookies.set('user', response, { path: '/', expires: expireDate })
    }

    action.payload = response;
  }
  next(action);
};

export default loginMiddleware;
