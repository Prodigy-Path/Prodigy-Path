/** @format */

import fetchApi from '../../../utility/fetchApi';

const getConnectionRequest = (store) => (next) => async (action) => {
  if (action.payload?.action === 'CONNECTION_REQUEST') {
    const { user } = store.getState((state) => state).login;
    const connectionNames = [];
    const yourUser = await fetchApi(
      `${process.env.REACT_APP_SERVER}/users/${user._id}`,
      null,
      'GET',
      null,
    );
    if (!yourUser.connection_requests) yourUser.connection_requests = [];
    async function bigFunction() {
      const connectionRequestPromises = yourUser.connection_requests.map(
        async (id) => {
          await grabConnection(id);
          async function grabConnection(id) {
            let url = `${process.env.REACT_APP_SERVER}/users/${id}`;
            let body = null;
            let method = 'get';
            let config = null;
            let response = await fetchApi(url, body, method, config);
            connectionNames.push(response);
            return response;
          }
        },
      );
      await Promise.all(connectionRequestPromises);
    }
    await bigFunction();
    action.payload = connectionNames;
  }
  next(action);
};

export default getConnectionRequest;
