/** @format */

import fetchApi from '../../../../utility/fetchApi';
import signUp from '../signUpMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('postTasks', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {
      getState: () => {
        return { login: { user: {} } };
      },
    };
    next = jest.fn();
  });

  it('should call fetchApi with the correct parameters when action type is signUp', async () => {
    action = {
      payload: {
        action: 'signUp',
        updateData: {
          _id: '123',
        },
      },
    };
    await signUp(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'signUp',
        _id: '123',
        updateData: {
          _id: '123',
        },
      },
    };
    await signUp(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
