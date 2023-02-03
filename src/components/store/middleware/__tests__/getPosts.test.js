/** @format */

import fetchApi from '../../../../utility/fetchApi';
import getPosts from '../posts/getPostMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('getTasks', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {};
    next = jest.fn();
  });

  it('should call fetchApi with the correct parameters when action type is GET_TASKS', async () => {
    action = {
      payload: {
        action: 'getPost',
      },
    };
    await getPosts(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'getPost',
      },
    };
    await getPosts(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
