/** @format */

import fetchApi from '../../../../utility/fetchApi';
const sendTasksDBMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'NEW_TASK') {
    const user = store.getState().login.user;
    let url = `${process.env.REACT_APP_SERVER}/tasks`;
    let body = {
      title: action.payload.tasks.title,
      description: action.payload.tasks.description,
      assigned_by: user.username,
      assigned_to: action.payload.tasks.assigned_to,
    };
    let method = 'post';
    let config = null;
    await fetchApi(url, body, method, config);
    method = 'get';
    body = null;
    let response = await fetchApi(url, body, method, config);
    action.payload.response = response;
  }
  next(action);
};

export default sendTasksDBMiddleware;
