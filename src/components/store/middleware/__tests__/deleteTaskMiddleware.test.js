/** @format */

import fetchApi from '../../../../utility/fetchApi';
import deleteTask from '../tasks/deleteTasksMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('deleteTask', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {};
    next = jest.fn();
  });

  it('should call fetchApi with the correct parameters when action type is DELETE_TASK', async () => {
    action = {
      payload: {
        action: 'DELETE_TASK',
        _id: '123',
      },
    };
    await deleteTask(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'DELETE_TASK',
        _id: '123',
      },
    };
    await deleteTask(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
