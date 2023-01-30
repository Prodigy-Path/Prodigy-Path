import fetchApi from "../../../utility/fetchApi";
const signUpMiddleware = (store) => (next) => async (action) => {
  if (action.payload?.action === 'signUp') {
    let url = 'http://localhost:3002/signup'
    let body = {
      username: action.payload.username,
      name: action.payload.name,
      password: action.payload.password,
      role: action.payload.role
    };
    console.log(action.payload.role);
    let method = 'post'
    let config = null
    let response = await fetchApi(url, body, method, config)
    console.log(response.data);
    console.log(action.payload)
  }
  next(action);
};

export default signUpMiddleware;