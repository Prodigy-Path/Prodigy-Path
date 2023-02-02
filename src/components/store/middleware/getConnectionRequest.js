/** @format */

import fetchApi from '../../../utility/fetchApi';

const getConnectionRequest = (store) => (next) => async (action) => {
  if (action.payload?.action === 'CONNECTION_REQUEST') {
    const { user } = store.getState((state) => state).login;
    const connectionNames = [];

    async function bigFunction() {
      const connectionRequestPromises = user.connection_requests.map(
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
