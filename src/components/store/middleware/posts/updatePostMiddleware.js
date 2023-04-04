/** @format */

import fetchApi from '../../../../utility/fetchApi';
const updatePostMiddleware = (store) => (next) => async (action) => {
  let id = store.getState().post.postId
  if (action.payload?.action === 'updatePost') {
    let url = `${process.env.REACT_APP_SERVER}/posts/${id}`;

    let body = {
      title: action.payload.title,
      text: action.payload.text,
      user: action.payload.user,
      userName: action.payload.userName,
    };
    let method = 'put';
    let config = null;
    await fetchApi(url, body, method, config);
  }
  next(action);
};

export default updatePostMiddleware;
