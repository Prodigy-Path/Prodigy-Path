/** @format */

import fetchApi from '../../../utility/fetchApi';
const convertIdToName = (store) => (next) => async (action) => {
  if (action.payload?.action === 'CONNECTION_NAMES') {
    const { usersConnections } = store.getState((state) => state).login;

    const connectionNames = usersConnections?.map(async (connection) => {
      let url = `${process.env.REACT_APP_SERVER}/users/${connection}`;
      let body = null;
      let method = 'get';
      let config = null;
      let response = await fetchApi(url, body, method, config);
      return response;
    });
    action.payload.users = connectionNames;
  }
  next(action);
};

export default convertIdToName;
