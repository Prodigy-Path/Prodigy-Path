/** @format */

const logger = (store) => (next) => (action) => {
  console.log(action.payload);

  next(action);
};

export default logger;
