/** @format */

import fetchApi from '../../../../utility/fetchApi';
const updateTask = (store) => (next) => async (action) => {
  if (action.payload?.action === 'UPDATE_TASK') {
    const user = store.getState().login.user;
    let url = `${process.env.REACT_APP_SERVER}/tasks/${action.payload.updateData._id}`;
    let body = {
      _id: action.payload.updateData._id,
      title: action.payload.updateData.title,
      description: action.payload.updateData.description,
      assigned_by: user.username,
      assigned_to: action.payload.updateData.assigned_to,
    };
    let method = 'put';
    let config = null;
    await fetchApi(url, body, method, config);
  }
  next(action);
};

export default updateTask;
