/** @format */

import fetchApi from '../../../../utility/fetchApi';
const updatePostMiddleware = (store) => (next) => async (action) => {
  let id = store.getState().post.postId
  console.log(id)
  console.log(action.payload)
  if (action.payload?.action === 'updatePost') {
    let url = `${process.env.REACT_APP_SERVER}/posts/${id}`;
    console.log(url)
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
