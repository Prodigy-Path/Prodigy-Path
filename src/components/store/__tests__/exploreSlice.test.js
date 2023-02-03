/** @format */

import store from '../';
import { setParams, setResults, setPage, newConnection } from '../exploreSlice';

describe('exploreSlice', () => {
  beforeEach(() => {
    store.dispatch(setParams({ query: '' }));
    store.dispatch(setResults([]));
    store.dispatch(setPage({ page: 1 }));
    store.dispatch(newConnection({ _id: '', name: '', email: '' }));
  });

  it('sets the search parameters', () => {
    store.dispatch(setParams({ query: 'test' }));
    expect(store.getState().explore.searchParam).toBe('test');
  });

  it('sets the search results', () => {
    const results = [
      { _id: '1', name: 'Test 1', email: 'test1@test.com' },
      { _id: '2', name: 'Test 2', email: 'test2@test.com' },
    ];
    store.dispatch(setResults(results));
    expect(store.getState().explore.results).toEqual(results);
  });

  it('sets the current page', () => {
    store.dispatch(setPage({ page: 2 }));
    expect(store.getState().explore.currentPage).toBe(2);
  });

  it('adds a new connection', () => {
    const connection = { _id: '1', name: 'Test 1', email: 'test1@test.com' };
    store.dispatch(newConnection(connection));
    expect(store.getState().explore.newConnections).toContainEqual(connection);
  });
});
