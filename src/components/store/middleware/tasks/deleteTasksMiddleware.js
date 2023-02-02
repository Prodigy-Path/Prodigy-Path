/** @format */

import fetchApi from '../../../../utility/fetchApi';
const deleteTask = (store) => (next) => async (action) => {
  if (action.payload?.action === 'DELETE_TASK') {
   
    let url = `${process.env.REACT_APP_SERVER}/tasks/${action.payload._id}`;
    let body = null;
    let method = 'delete';
    let config = null;
   await fetchApi(url, body, method, config);
    
  }
  next(action);
};

export default deleteTask;
