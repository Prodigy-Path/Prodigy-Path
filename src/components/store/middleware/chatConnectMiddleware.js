/** @format */

import fetchApi from '../../../utility/fetchApi';
import { getChats } from '../chatSlice';

const chatConnectMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'getChats') {
    let url = `${process.env.REACT_APP_SERVER}/mentorproteges`;
    let body = null;
    let method = 'get';
    let config = null;
    let response = await fetchApi(url, body, method, config);
    store.dispatch(getChats(response));
    action.payload = response;
  }
  if (!action.type) action.type = getChats?.type;
  next(action);
};

export default chatConnectMiddleware;
