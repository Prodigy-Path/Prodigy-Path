/** @format */

import fetchApi from '../../../../utility/fetchApi';
import getAllTasks from '../tasks/getAllTasksMiddleware';

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
        action: 'GET_TASKS',
        _id: '123',
      },
    };
    await getAllTasks(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'GET_TASKS',
        _id: '123',
      },
    };
    await getAllTasks(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
