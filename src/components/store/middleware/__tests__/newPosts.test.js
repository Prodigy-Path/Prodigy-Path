/** @format */

import fetchApi from '../../../../utility/fetchApi';
import newPosts from '../posts/newPostMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('newPosts', () => {
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

  it('should call fetchApi with the correct parameters when action type is newPosts', async () => {
    action = {
      payload: {
        action: 'newPost',
        updateData: {
          _id: '123',
        },
      },
    };
    await newPosts(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'newPost',
        _id: '123',
        updateData: {
          _id: '123',
        },
      },
    };
    await newPosts(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
