import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomThunk, sendMessageThunk } from '../store/chatSlice';
import io from "socket.io-client";
// import messageInterface from './useMessage';
const socket = io.connect("http://localhost:3002");


const Chat = () => {



  const dispatch = useDispatch();
  const { roomList, messages } = useSelector(state => state.chat);


  // console.log('messaages:', messages);


  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', (data) => {
      console.log('YAY GOT MESSAGE', data);
    });
  
    socket.on('USER_CONNECTED', (data) => {
      console.log('USER CONNECTED YAY', data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  

  function handleSubmitMessage(e) {
    e.preventDefault();
    const text = e.target.text.value;
    dispatch(sendMessageThunk({ socket, text }))
  }
  
  function handleJoinRoom(e) {
    e.preventDefault();
    const text = e.target.text.value;
    dispatch(joinRoomThunk({ socket, text }))
  }

  return (
    <div>
      <div>
      </div>
      <div>
      <form onSubmit={handleJoinRoom}>
          <textarea name='text'/>
          <button type='submit'>Room</button>
        </form>
        <ul>
          {roomList.map((room, index) => (
            <li key={index}>{room}</li>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmitMessage}>
          <textarea name='text'/>
          <button type='submit'>Send</button>
        </form>
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
