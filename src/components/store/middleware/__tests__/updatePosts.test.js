/** @format */

import fetchApi from '../../../../utility/fetchApi';
import updatePosts from '../posts/updatePostMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('UpdateTasks', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {
      getState: () => {
        return { post: { postId: 'Asdjh' } };
      },
    };
    next = jest.fn();
  });

  it('should call fetchApi with the correct parameters when action type is updatePost', async () => {
    action = {
      payload: {
        action: 'updatePost',
        updateData: {
          _id: '123',
        },
      },
    };
    await updatePosts(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'updatePost',
        _id: '123',
        updateData: {
          _id: '123',
        },
      },
    };
    await updatePosts(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
