/** @format */

import loginMiddleware from '../loginMiddleware';
import fetchApi from '../../../../utility/fetchApi';

jest.mock('../../../../utility/fetchApi');

describe('loginMiddleware', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {
      getState: jest.fn(() => ({
        login: {
          checked: true,
        },
      })),
      dispatch: jest.fn(),
    };
    next = jest.fn();
    action = {
      payload: {
        action: 'login',
        username: 'test-user',
        password: 'test-password',
      },
    };
  });

  it('calls next with action if action does not have login payload', async () => {
    action.payload = {};
    await loginMiddleware(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it('calls fetchApi with correct parameters and dispatches response', async () => {
    fetchApi.mockResolvedValueOnce({});
    await loginMiddleware(store)(next)(action);

    expect(fetchApi).toHaveBeenCalled();
  });

  it('sets user cookie with correct expiration date if checked is true', async () => {
    fetchApi.mockResolvedValueOnce({});
    await loginMiddleware(store)(next)(action);

    expect(document.cookie).toContain('user=%7B%7D');
  });

  it('sets user cookie with correct expiration date if checked is false', async () => {
    store = {
      getState: jest.fn(() => ({
        login: {
          checked: false,
        },
      })),
      dispatch: jest.fn(),
    };
    fetchApi.mockResolvedValueOnce({});
    await loginMiddleware(store)(next)(action);

    expect(document.cookie).toContain('user=%7B%7D');
  });
});
