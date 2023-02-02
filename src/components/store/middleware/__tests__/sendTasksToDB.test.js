/** @format */

import fetchApi from '../../../../utility/fetchApi';
import sendToDB from '../tasks/sendTasksDBMiddleware';

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

  it('should call fetchApi with the correct parameters when action type is NEW_TASK', async () => {
    action = {
      payload: {
        action: 'NEW_TASK',
        tasks: {
          title: '123',
        },
      },
    };
    await sendToDB(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });

  it('should call next with the action', async () => {
    action = {
      payload: {
        action: 'NEW_TASK',
        tasks: {
           title: '123',
        }
       
      },
    };
    await sendToDB(store)(next)(action);
    expect(next).toHaveBeenCalled();
  });
});
