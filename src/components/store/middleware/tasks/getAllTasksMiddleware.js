/** @format */

import fetchApi from '../../../../utility/fetchApi';
const getAllTasks = (store) => (next) => async (action) => {
  if (action.payload?.action === 'GET_TASKS') {
    let url = `${process.env.REACT_APP_SERVER}/tasks`;
    let body = null;
    let method = 'get';
    let config = null;
    let response = await fetchApi(url, body, method, config);
    action.payload.response = response;
    console.log(action.payload.response);
  }
  next(action);
};

export default getAllTasks;
