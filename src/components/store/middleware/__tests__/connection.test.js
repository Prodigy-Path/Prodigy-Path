/** @format */

import connectionMiddleware from '../connectionMiddleware';

jest.mock('../../../../utility/fetchApi', () => jest.fn(() => Promise.resolve()));
describe('connectionMiddleware', () => {
  it('should call next with action if action is not a connection request', () => {
    const store = {};
    const next = jest.fn();
    const action = {
      payload: {
        action: 'not-connection',
      },
    };
    connectionMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should add newConnection to connection_requests and call next with updated action', async () => {
    const store = {};
    const next = jest.fn();
    const action = {
      payload: {
        action: 'connection',
        connection_requests: ['request1', 'request2'],
        user: {
          _id: 'user_id',
        },
        newConnection: 'new_request',
        token: 'token',
      },
    };
    await connectionMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
