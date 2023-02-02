/** @format */

import fetchApi from '../../../utility/fetchApi';

const processConnectionRequest = (store) => (next) => async (action) => {
  if (action.payload?.action === 'ACCEPT') {
    const { user } = store.getState((state) => state).login;
    const connection = action.payload.connection;
    async function acceptConnection() {
      let url = `${process.env.REACT_APP_SERVER}/mentorproteges`;
      let body = {
        [user.role]: user._id,
        [connection.role]: connection._id,
        tags: [...user.tags, ...connection.tags],
      };
      let method = 'post';
      let config = null;
      let response = await fetchApi(url, body, method, config);
      return response;
    }
    async function deleteRequest() {
      let url = `${process.env.REACT_APP_SERVER}/users/${user._id}`;
      let body = {
        ...user,
        connection_requests: user.connection_requests.filter(
          (item) => item !== connection._id,
        ),
      };
      let method = 'PATCH';
      let config = {
        bearerToken: user.token,
      };
      let response = await fetchApi(url, body, method, config);
      console.log(response)
      return response
    }
    await acceptConnection()
    action.payload.user = await deleteRequest()
    action.payload.connection = connection
    console.log(action.payload)
  }
  if (action.payload?.action === 'DELETE') {
    const { user } = store.getState((state) => state).login;
    const connection = action.payload.connection
    async function deleteRequest() {
      let url = `${process.env.REACT_APP_SERVER}/users/${user._id}`;
      let body = { ...user, connection_requests: user.connection_requests.filter(item => item !== connection._id) };
      let method = 'PATCH';
      let config = {
        bearerToken: user.token,
      };
      let response = await fetchApi(url, body, method, config);
      console.log(response)
      return response
    }
    action.payload.user = await deleteRequest()
    action.payload.connection = connection._id
  }
  next(action);
};

export default processConnectionRequest;
