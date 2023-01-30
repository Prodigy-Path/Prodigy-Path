import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import messageInterface from './useMessage';
import { joinRoom, sendMessage } from './useMessage';


const Chat = () => {

  const endpoint = 'http://localhost:3002'

  const io = socketIOClient(endpoint);

  const [roomName, setRoomName] = useState('');
  const [roomList, setRoomList] = useState([]);
  const [messages, setMessages] = useState([]);


  useEffect(() => (
    messageInterface(io)
  ), []);


  console.log(messages);

  function handleSubmitMessage(e) {
    e.preventDefault();
    sendMessage(io, e.target.text.value)
  }
  

  return (
    <div>
      <div>
      </div>
      <div>

        <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        <button onClick={() => joinRoom(io, roomName)}>Join Room</button>

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
