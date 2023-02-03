/** @format */

import store from '../';
import chatSlice, {
  setRoomName,
  setRoomList,
  setMessages,
  getChats,
} from '../chatSlice';

describe('Chat Slice', () => {
  console.log(chatSlice);
  test('roomName state should initially be an empty string', () => {
    expect(store.getState().chat.roomName).toBe('');
  });

  test('roomList state should initially be an empty array', () => {
    expect(store.getState().chat.roomList).toEqual([]);
  });

  test('messages state should initially be an empty array', () => {
    expect(store.getState().chat.messages).toEqual([]);
  });

  test('chatConnection state should initially be an empty array', () => {
    expect(store.getState().chat.chatConnection).toEqual([]);
  });

  test('roomName state should be updated when setRoomName is dispatched', () => {
    store.dispatch(setRoomName('Test Room'));
    expect(store.getState().chat.roomName).toBe('Test Room');
  });

  test('roomList state should be updated when setRoomList is dispatched', () => {
    store.dispatch(setRoomList(['Test Room 1', 'Test Room 2']));
    expect(store.getState().chat.roomList).toEqual([
      'Test Room 1',
      'Test Room 2',
    ]);
  });

  test('messages state should be updated when setMessages is dispatched', () => {
    store.dispatch(
      setMessages([
        { text: 'Test Message 1', id: 1 },
        { text: 'Test Message 2', id: 2 },
      ]),
    );
    expect(store.getState().chat.messages).toEqual([
      { text: 'Test Message 1', id: 1 },
      { text: 'Test Message 2', id: 2 },
    ]);
  });

  test('chatConnection state should be updated when getChats is dispatched', () => {
    store.dispatch(
      getChats([
        { text: 'Test Chat 1', id: 1 },
        { text: 'Test Chat 2', id: 2 },
      ]),
    );
    expect(store.getState().chat.chatConnection).toEqual([
      { text: 'Test Chat 1', id: 1 },
      { text: 'Test Chat 2', id: 2 },
    ]);
  });
});
