/** @format */

import fetchApi from '../../../../utility/fetchApi'
const deletePostMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'deletePost') {
    try {
   
      let url = `${process.env.REACT_APP_SERVER}/posts/${action.payload._id}`;
     
      let body = null;
      let method = 'delete';
      let config = null;
      await fetchApi(url, body, method, config);
      next(action);
    } catch (error) {

      next(action);
    }
  }
  next(action);
};

export default deletePostMiddleware;