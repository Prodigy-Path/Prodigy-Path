/** @format */

import fetchApi from '../../../utility/fetchApi';
import { getConnections } from '../loginSlice';
const getMentorProtegePosts = (store) => (next) => async (action) => {
  if (action.payload?.action === 'getMentorProtegePost') {
    const grabConnections = async () => {
      let url = `${process.env.REACT_APP_SERVER}/mentorproteges`;
      let body = null;
      let method = 'get';
      let config = null;
      let response = await fetchApi(url, body, method, config);
      store.dispatch(getConnections(response));

      return response;
    };
    let connections = await grabConnections();
    const grabPosts = async () => {
      let url = `${process.env.REACT_APP_SERVER}/posts`;
      let body = null;
      let method = 'get';
      let config = null;
      let response = await fetchApi(url, body, method, config);
      return response;
    };
    let connectionPosts = await grabPosts();

    action.payload = {
      connections,
      connectionPosts,
    };
  }
  next(action);
};

export default getMentorProtegePosts;
