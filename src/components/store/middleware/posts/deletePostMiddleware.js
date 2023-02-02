/** @format */

import fetchApi from '../../../../utility/fetchApi'
const deletePostMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'deletePost') {
    try {
      console.log(action.payload)
      let url = `${process.env.REACT_APP_SERVER}/posts/${action.payload._id}`;
      console.log(url)
      let body = null;
      let method = 'delete';
      let config = null;
      await fetchApi(url, body, method, config);
      next(action);
    } catch (error) {
      console.log(error);
      next(action);
    }
  }
  next(action);
};

export default deletePostMiddleware;