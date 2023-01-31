/** @format */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomThunk, sendMessageThunk } from '../store/chatSlice';
import io from 'socket.io-client';
// import messageInterface from './useMessage';
const socket = io.connect(process.env.REACT_APP_SERVER);

const Chat = () => {
  const dispatch = useDispatch();
  const { roomList, messages } = useSelector((state) => state.chat);


  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', (data) => {
      console.log('YAY GOT MESSAGE', data);
      dispatch(sendMessageThunk({ text: data }));
    });

    socket.on('USER_CONNECTED', (data) => {
      console.log('USER CONNECTED YAY', data);
    });
    socket.on('proofOfLife', (data) => {
      console.log(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  function handleSubmitMessage(e) {
    e.preventDefault();
    const text = e.target.text.value;
    dispatch(sendMessageThunk({ socket, text }));
  }

  function handleJoinRoom(e) {
    e.preventDefault();
    const text = e.target.text.value;
    dispatch(joinRoomThunk({ socket, text }));
  }

  return (
    <div className="chat">
      <div className="chat__join">
        <form onSubmit={handleJoinRoom}>
          <textarea name="text" />
          <button type="submit">Room</button>
        </form>
        <ul>
          {roomList.map((room, index) => (
            <li key={index}>{room}</li>
          ))}
        </ul>
      </div>
      <div className="chat__message">
        <form onSubmit={handleSubmitMessage}>
          <textarea name="text" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="chat__window">
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
