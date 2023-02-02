/** @format */

import chatConnectMiddleware from '../chatConnectMiddleware';
import configureMockStore from 'redux-mock-store';

describe('chatConnectMiddleware', () => {
  let store;
  let action;

  beforeEach(() => {
    store = configureMockStore([chatConnectMiddleware])({});
  });

  it('should dispatch getChats action with the correct data when action payload contains "getChats"', async () => {
    const response = [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'World' },
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(response),
      }),
    );

    action = { payload: { action: 'getChats' } };

    await store.dispatch(action);
    expect(store.getActions()[0].payload[0]).toEqual({
      id: 1,
      message: 'Hello',
    });
  });
});
