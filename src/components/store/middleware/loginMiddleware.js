const loginMiddleware = (store) => (next) => async (action) => {
  let response = await fetch.post()
  console.log(action);

  next(action);
};

export default loginMiddleware;
