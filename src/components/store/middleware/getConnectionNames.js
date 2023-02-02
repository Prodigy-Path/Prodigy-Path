/** @format */

import fetchApi from '../../../utility/fetchApi';
const convertIdToName = (store) => (next) => async (action) => {
  if (action.payload?.action === 'CONNECTION_NAMES') {
    const { chatConnection } = store.getState((state) => state).chat;
    const { user } = store.getState((state) => state).login;
    let filterConnections = chatConnection.filter(
      (item) => user._id === item.mentor || user._id === item.protege,
    );

    const connectionNames = [];

    async function bigFunction() {
      const grabConnectionPromises = filterConnections.map(
        async (connection) => {
          let role;
          if (user.role === 'mentor') {
            role = 'protege';
          } else if (user.role === 'protege') {
            role = 'mentor';
          }
          return grabConnection(role);
          async function grabConnection(role) {
            let url = `${process.env.REACT_APP_SERVER}/users/${connection[role]}`;
            let body = null;
            let method = 'get';
            let config = null;
            let response = await fetchApi(url, body, method, config);
            connectionNames.push(response);
            return response;
          }
        },
      );
      await Promise.all(grabConnectionPromises);
    }
    await bigFunction();
    action.payload.users = connectionNames;
  }
  next(action);
};

export default convertIdToName;
