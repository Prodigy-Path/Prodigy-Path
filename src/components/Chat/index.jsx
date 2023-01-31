/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomThunk, sendMessageThunk } from '../store/chatSlice';
import io from 'socket.io-client';
const socket = io.connect(process.env.REACT_APP_SERVER);

const Chat = () => {
  const dispatch = useDispatch();
  const {  messages, roomName } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.login);


  const [isChatVisible, setIsChatVisible] = useState(false);

  const testMentors = ['jim', 'tom', 'joe', 'craig', 'ronny']

  console.log(user);

  let name = user.name


  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', ({ text, id }) => {

      console.log('YAY GOT MESSAGE', text, id);
      dispatch(sendMessageThunk({ text: text, id: id }));
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

    if (roomName) {
      const input = e.target.text.value;
      const text = `${name}: ${input}`;
      dispatch(sendMessageThunk({ socket, text, id: crypto.randomUUID() }));
    } else {
      window.alert('Please join a room before sending a message.');
      return;
    }
    e.target.text.value = ''
  }

  function handleJoinRoom(room) {
    console.log(room);
    let text = room;
    socket.emit("LEAVE_ROOM", roomName);
    dispatch(joinRoomThunk({ socket, text }));
  }



  return (
    <div className="chat_open">
      {isChatVisible && (
        <div className="chat">
          <div className="chat__join">
            <ul>
              <button onClick={() => setIsChatVisible(false)}>Close Chat</button>
              {testMentors.map((room, index) => (
                <div onClick={() => handleJoinRoom(room)} key={index}>{room}</div>
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
                <li key={index}>{`${msg.text}`}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
      {!isChatVisible && (
        <div onClick={() => setIsChatVisible(true)}>Open Chat</div>
        )}
    </div>
  );
};


export default Chat;
