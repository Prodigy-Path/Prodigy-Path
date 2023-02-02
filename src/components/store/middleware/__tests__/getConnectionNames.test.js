/** @format */

import convertIdToName from '../getConnectionNames';

const mockResponse = [
  { id: 2, name: 'User 2', role: 'mentor' },
  { id: 3, name: 'User 3', role: 'protege' },
];

jest.mock('../../../../utility/fetchApi', () =>
  jest.fn(() => Promise.resolve(mockResponse)),
);

describe('convertIdToName middleware', () => {
  let store;
  let next;
  let action;

  beforeEach(() => {
    store = {
      getState: jest.fn(() => ({
        chat: {
          chatConnection: [
            { mentor: 1, protege: 2 },
            { mentor: 3, protege: 1 },
          ],
        },
        login: {
          user: {
            _id: 1,
            role: 'protege',
          },
        },
      })),
    };
    next = jest.fn();
    action = {
      payload: {
        action: 'CONNECTION_NAMES',
      },
    };
  });

  it('should convert connection IDs to connection names', async () => {
    await convertIdToName(store)(next)(action);

    expect(action.payload).toHaveProperty('action');
  });

  it('should call next with the action', async () => {
    await convertIdToName(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});
