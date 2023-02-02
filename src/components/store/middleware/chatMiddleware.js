/** @format */

const chatMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    if (!action.type) action.type = 'test';
    return next(action);
  };

export default chatMiddleware;
