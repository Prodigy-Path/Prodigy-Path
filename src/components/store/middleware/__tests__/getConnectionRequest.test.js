/** @format */

import fetchApi from '../../../../utility/fetchApi';
import getConnectionRequest from '../getConnectionRequest';

jest.mock('../../../../utility/fetchApi');

const store = {
  getState: () => ({
    login: {
      user: {
        _id: 'userId',
        connection_requests: ['connectionId1', 'connectionId2'],
        token: 'userToken',
      },
    },
  }),
};
const next = jest.fn();
let action = {
  payload: {
    action: 'CONNECTION_REQUEST',
  },
};


describe('getConnectionRequest', () => {
  it('should dispatch an action with connection names', async () => {
    fetchApi.mockResolvedValue({ name: 'Connection Name' });
    await getConnectionRequest(store)(next)(action);

    expect(fetchApi).toHaveBeenCalledTimes(2);

    expect(next).toHaveBeenCalledWith({
      payload: [{ name: 'Connection Name' }, { name: 'Connection Name' }],
    });
  });

   it('should call next with the action', async () => {
     action = {
       payload: {
         action: 'wrongAction',         
       },
     };
     await getConnectionRequest(store)(next)(action);
     expect(next).toHaveBeenCalled();
   });
});