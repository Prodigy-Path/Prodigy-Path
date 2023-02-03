/** @format */
//TODO fix these tests
import store from '../';
import {
  post,
  getPost,
  deletePost,
  setIsEditing,
  resetIsEditing,
} from '../postSlice';

describe('post slice', () => {
  beforeEach(() => {
    store.dispatch({ type: 'RESET_STATE' });
  });

  it('dispatches the post action', () => {
    const postData = {
      _id: '1',
      title: 'title',
      text: 'text',
    };
    store.dispatch(post(postData));
    const state = store.getState();
    // expect(state.posts).toEqual([postData]);
    console.log(state.dispatch);
  });

  it('dispatches the getPost action', () => {
    const posts = [
      { _id: '1', title: 'title', text: 'text' },
      { _id: '2', title: 'title2', text: 'text2' },
    ];
    store.dispatch(getPost(posts));
    const state = store.getState();
    // expect(state.posts).toEqual(posts);
    console.log(state.dispatch);
  });

  it('dispatches the deletePost action', () => {
    const postData = {
      _id: '1',
      title: 'title',
      text: 'text',
    };
    store.dispatch(post(postData));
    store.dispatch(deletePost(postData));
    const state = store.getState();
    // expect(state.posts).toEqual([]);
    console.log(state.dispatch);
  });

  it('dispatches the setIsEditing action', () => {
    const postData = {
      _id: '1',
      title: 'title',
      text: 'text',
    };
    store.dispatch(post(postData));
    store.dispatch(setIsEditing(postData));
    const state = store.getState();
    // expect(state.isEditing).toEqual(true);
    // expect(state.postId).toEqual('1');
    console.log(state.dispatch);
  });

  it('dispatches the resetIsEditing action', () => {
    store.dispatch(resetIsEditing());
    const state = store.getState();
    // expect(state.isEditing).toEqual(false);
    console.log(state.dispatch);
  });
});
