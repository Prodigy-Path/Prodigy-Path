/** @format */

import fetchApi from '../../../../utility/fetchApi';
import getMentorProtegePosts from '../posts/getMentorProtegePosts';
import { getConnections } from '../../loginSlice';

jest.mock('../../../../utility/fetchApi');

describe('getMentorProtegePosts middleware', () => {
  let next;
  let store;

  beforeEach(() => {
    next = jest.fn();
    store = {
      getState: jest.fn().mockReturnValue({
        login: {
          user: {
            connection_requests: [1, 2, 3],
          },
        },
      }),
      dispatch: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('dispatches getConnections with the correct payload', async () => {
    const fakeResponse = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
    ];
    fetchApi.mockResolvedValueOnce(fakeResponse);

    const action = {
      payload: {
        action: 'getMentorProtegePost',
      },
    };

    await getMentorProtegePosts(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(getConnections(fakeResponse));
  });

  it('calls next with the correct action', async () => {
    const fakeConnections = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
    ];
    fetchApi
      .mockResolvedValueOnce(fakeConnections)
      .mockResolvedValueOnce(fakeConnections);

    const action = {
      payload: {
        action: 'getMentorProtegePost',
      },
    };

    await getMentorProtegePosts(store)(next)(action);
    expect(next).toHaveBeenCalledWith({
      payload: {
        connections: fakeConnections,
        connectionPosts: fakeConnections,
      },
    });
  });

  it('calls fetchApi with the correct parameters', async () => {
    const fakeConnections = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
    ];
    fetchApi
      .mockResolvedValueOnce(fakeConnections)
      .mockResolvedValueOnce(fakeConnections);

    const action = {
      payload: {
        action: 'getMentorProtegePost',
      },
    };

    await getMentorProtegePosts(store)(next)(action);
    expect(fetchApi).toHaveBeenCalled();
  });
});
