/** @format */

import fetchApi from '../../../../utility/fetchApi';
const sendTasksDBMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'NEW_TASK') {
    let url = `${process.env.REACT_APP_SERVER}/tasks`;
    let body = {
      title: action.payload.tasks.title,
      description: action.payload.tasks.description,
      assigned_by: 'test',
      assigned_to: action.payload.tasks.mentee,
    };
    let method = 'post';
    let config = null;
    let response = await fetchApi(url, body, method, config);
    // action.payload.tasks = response;
    console.log(response);
  }
  next(action);
};

export default sendTasksDBMiddleware;
