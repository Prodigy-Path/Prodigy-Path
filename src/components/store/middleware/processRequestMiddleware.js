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
    async function getConnections() {
      let url = `${process.env.REACT_APP_SERVER}/mentorproteges`;
      let body = null
      let method = 'get';
      let config = null
      let connections = await fetchApi(url, body, method, config);
      let desiredConnection = connections.find(
        conn => conn[user.role] === user._id && conn[connection.role] === connection._id
      );
      return deleteConnection(desiredConnection)

    }
    async function deleteConnection(desiredConnection) {
      let url = `${process.env.REACT_APP_SERVER}/mentorproteges/${desiredConnection._id}`;
      let body = null
      let method = 'delete';
      let config = null
      await fetchApi(url, body, method, config);
    }
    getConnections()
    action.payload.user = user
    action.payload.connection = connection
  }
  if (action.payload?.action === 'DECLINE') {
    const { user } = store.getState((state) => state).login;
    const connection = action.payload.connection;
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
    action.payload.user = await deleteRequest()
    action.payload.connection = connection
    console.log(action.payload)
  }
  next(action);
};

export default processConnectionRequest;
