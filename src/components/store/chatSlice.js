/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { joinRoom, sendMessage } from '../Chat/useMessage';

const initialState = {
  roomName: '',
  roomList: [],
  messages: [],
  chatConnection: []
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    setRoomList: (state, action) => {
      state.roomList = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    getChats: (state, action) => {
        if (state.chatConnection?.length !== action.payload.length) {
          state.chatConnection = [...action.payload];
      }
    }
  },
});

export const { setRoomName, setRoomList, setMessages, getChats } = chatSlice.actions;

export const joinRoomThunk = (data) => (dispatch) => {
  joinRoom(data);
  const { text } = data;
  dispatch(setRoomName(text));
};

export const sendMessageThunk = (data) => (dispatch, getState) => {
  const { text, socket, id, room } = data;
  const { messages, roomName } = getState().chat;
  if (messages.filter(message => message.id === id).length === 0) {
    dispatch(setMessages([...messages, { text, id }]));
  }
  if (id === null) {
    dispatch(setMessages([]));
  }
  if (socket) {
    if (room) {
      const obj = {
        id: id,
        room: room,
        text: text,
        socket: socket,
      };
      sendMessage(obj);
    } else {
      const obj = {
        id: id,
        room: roomName,
        text: text,
        socket: socket,
      };
      sendMessage(obj);
    }
  }
};

export default chatSlice.reducer;
