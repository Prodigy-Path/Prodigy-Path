/** @format */

import fetchApi from '../../../../utility/fetchApi';
const deleteTask = (store) => (next) => async (action) => {
  if (action.payload?.action === 'DELETE_TASK') {
    let url = `${process.env.REACT_APP_SERVER}/tasks`;
    let body = null;
    let method = 'delete';
    let config = null;
    let response = await fetchApi(url, body, method, config);
    console.log(response, response.status);
    action.payload.response = response;
  }
  next(action);
};

export default deleteTask;
