import fetchApi from "../../../utility/fetchApi";


const loginMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'login') {
    let url = 'http://localhost:3002/login'
    let body = null;
    let method = 'post'
    let config = {
      username: action.payload.username,
      password: action.payload.password
    }
    let response = await fetchApi(url, body, method, config)
    console.log(response);
    action.payload = response;
    console.log(action.payload)
  }
  next(action);
};

export default loginMiddleware;
