/** @format */

import store from '../';
import mentorProtegePostsReducer from '../mentorProtegePostsSlice';
import { getPostProtege } from '../mentorProtegePostsSlice';

describe('mentorProtegePostsReducer', () => {
  console.log(mentorProtegePostsReducer);
  beforeEach(() => {
    store.dispatch({ type: 'RESET_STORE' });
  });

  it('getPostProtege', () => {
    store.dispatch(
      getPostProtege({
        connectionPosts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
        connections: [
          { mentor: '1', protege: '2' },
          { mentor: '3', protege: '1' },
        ],
      }),
    );

    expect(store.getState().protegesPosts.protegePosts).toEqual([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ]);

    expect(store.getState().protegesPosts.connections).toEqual([
      { mentor: '1', protege: '2' },
      { mentor: '3', protege: '1' },
    ]);
  });
});
