/** @format */

import fetchApi from '../../../../utility/fetchApi';
import processRequest from '../processRequestMiddleware';

jest.mock('../../../../utility/fetchApi');

const initialState = {
  login: {
    user: {
      _id: '123',
      role: 'mentor',
      tags: ['java', 'javascript'],
      connection_requests: ['456', '789'],
      token: 'some-token',
    },
  },
};

describe('processConnectionRequest middleware', () => {
  it('should handle the ACCEPT action correctly', async () => {
    const store = {
      getState: jest.fn().mockReturnValue(initialState),
    };
    const next = jest.fn();
    const action = {
      payload: {
        action: 'ACCEPT',
        connection: {
          _id: '456',
          role: 'protege',
          tags: ['python'],
        },
      },
    };

    fetchApi.mockResolvedValueOnce({});
    fetchApi.mockResolvedValueOnce({});

    await processRequest(store)(next)(action);

    expect(fetchApi).toHaveBeenCalled();
    
    expect(next).toHaveBeenCalledWith({ payload: {} });
  });

  it('should handle the DELETE action correctly', async () => {
    const store = {
      getState: jest.fn().mockReturnValue(initialState),
    };
    const next = jest.fn();
    const action = {
      payload: {
        action: 'DELETE',
        connection: '456',
      },
    };

    fetchApi.mockResolvedValueOnce({});

    await processRequest(store)(next)(action);

    expect(fetchApi).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith({ payload: {} });
  });
});
