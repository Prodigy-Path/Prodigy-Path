/** @format */

import exploreMiddleware from '../exploreMiddleware';
jest.mock('../../../../utility/fetchApi', () => jest.fn(() => Promise.resolve()));
const mockStore = {
  dispatch: jest.fn(),
};

const next = jest.fn();

const mockAction1 = {
  payload: {
    action: 'search',
    userRole: 'protege',
  },
};
const mockAction2 = {
  payload: {
    action: 'search',
    userRole: 'mentor',
  },
};
describe('exploreMiddleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call next with action if action is not a search request', async () => {
    const nonSearchAction = { payload: { action: 'notSearch' } };
    await exploreMiddleware(mockStore)(next)(nonSearchAction);
    expect(next).toHaveBeenCalledWith(nonSearchAction);
  });

  it('should filter results based on user role protege', async () => {
    await exploreMiddleware(mockStore)(next)(mockAction1);

    expect(next).toHaveBeenCalledWith(mockAction1);
  });

  it('should filter results based on user role mentor', async () => {
    await exploreMiddleware(mockStore)(next)(mockAction2);

    expect(next).toHaveBeenCalledWith(mockAction2);
  });
});
