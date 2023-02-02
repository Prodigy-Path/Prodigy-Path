import fetchApi from '../../../utility/fetchApi';

const connectionMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'connection') {
    let url = `${process.env.REACT_APP_SERVER}/users/${action.payload.user._id}`;
    if(!action.payload.connection_requests.includes(action.payload.newConnection)){
      let body = {
        ...action.payload.user,
        connection_requests: [...action.payload.connection_requests, action.payload.newConnection]
      }
      let method = 'PATCH';
      let config = {
        bearerToken: action.payload.token
      };
      let response = await fetchApi(url, body, method, config);
      action.payload = response
    }
  }
  next(action);
};

export default connectionMiddleware;
