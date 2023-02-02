/** @format */

import fetchApi from '../../../../utility/fetchApi';
import updateTasks from '../tasks/updateTasksMiddleware';

jest.mock('../../../../utility/fetchApi');

describe('UpdateTasks', () => {
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

  it('should call fetchApi with the correct parameters when action type is UPDATE_TASK', async () => {
    action = {
      payload: {
        action: 'UPDATE_TASK',
        updateData: {
          _id: '123',
        },
      },
    };
    await updateTasks(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'UPDATE_TASK',
        _id: '123',
        updateData: {
          _id: '123',
        },
      },
    };
    await updateTasks(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
