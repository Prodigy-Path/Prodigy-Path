/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { joinRoom, sendMessage } from '../Chat/useMessage';

const initialState = {
  roomName: '',
  roomList: [],
  messages: [],
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
  },
});

export const { setRoomName, setRoomList, setMessages } = chatSlice.actions;

export const joinRoomThunk = (data) => (dispatch) => {
  joinRoom(data);
  const { text } = data;
  dispatch(setRoomName(text));
};

export const sendMessageThunk = (data) => (dispatch, getState) => {

  const { text, socket, id } = data;


  const { messages, roomName } = getState().chat;
  console.log(id);

  if (messages.filter(message => message.id === id).length === 0) {
    console.log('Message saved to state')
    dispatch(setMessages([...messages, { text, id }]));
  }
  if (socket) {
    const obj = {
      id: id,
      roomName: roomName,
      text: text,
      socket: socket,
    };
    sendMessage(obj);
  }
};

export default chatSlice.reducer;
