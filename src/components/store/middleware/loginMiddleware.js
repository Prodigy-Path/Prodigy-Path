import fetchApi from "../../../utility/fetchApi";

const loginMiddleware = (store) => (next) => async (action) => {
  let url = 'http://localhost:3002/login'
  let body = null;
  let method = 'post'
  let config = {
    username: 'Test',
    password: 'password'
  }
  let response = await fetchApi(url, body, method, config)
  console.log(response.data);

  next(action);
};

export default loginMiddleware;
