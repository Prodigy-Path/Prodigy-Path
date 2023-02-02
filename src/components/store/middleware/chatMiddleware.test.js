/** @format */

import chatMiddleware from './chatMiddleware';

describe('chatMiddleware', () => {
  let dispatch;
  let getState;
  let next;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    next = jest.fn();
  });

  it('should pass the action to next middleware if it is not a function', () => {
    const action = { type: 'SOME_ACTION' };
    chatMiddleware({ dispatch, getState })(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke the action with dispatch and getState if it is a function', () => {
    const action = jest.fn();
    chatMiddleware({ dispatch, getState })(next)(action);
    expect(action).toHaveBeenCalledWith(dispatch, getState);
  });
});
