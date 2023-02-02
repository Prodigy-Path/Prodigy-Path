/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomThunk, sendMessageThunk, getChats } from '../store/chatSlice';
import { Select } from '@mantine/core';
import io from 'socket.io-client';
import { convertToNames } from '../store/loginSlice';
const socket = io.connect(process.env.REACT_APP_SERVER);

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, roomName, chatConnection } = useSelector((state) => state.chat);
  const { user, userConnectionsUsers } = useSelector((state) => state.login);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const filterConnection = chatConnection.filter((item) => user._id === item.mentor || user._id === item.protege);
  const nameConnect = userConnectionsUsers.filter(item =>
    filterConnection.some(filter =>
      item.id === filter.mentor || item.id === filter.protege
    )
  ).map(item => ({
    name: item.name,
    _id: filterConnection.find(filter => item.id === filter.mentor || item.id === filter.protege)._id
  }));

  function getNames(nameConnect) {
    return nameConnect.map(item => item.name);
  }
  const namesArray = getNames(nameConnect);
  let name = user.name

  useEffect(() => {
    dispatch(getChats({ action: 'getChats' }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(convertToNames({ action: 'CONNECTION_NAMES' }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatConnection])

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', ({ text, id }) => {

      dispatch(sendMessageThunk({ text: text, id: id }));
    });
    socket.on('USER_CONNECTED', (data) => {
    });
    socket.on('proofOfLife', (data) => {
    });
    socket.on('ROOMS')
    // socket.on('USER_DISCONNECTED', (obj) => {

    //   const { text, room } = obj
    //   dispatch(sendMessageThunk({ socket, text, id: crypto.randomUUID(), room }));
    // })
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

  function handleJoinRoom(name) {
    let text = nameConnect.find(item => item.name === name)._id;
    socket.emit("LEAVE_ROOM", roomName);
    dispatch(sendMessageThunk({  id: null }));
    dispatch(joinRoomThunk({ socket, text }));
  }

  return (
    <>
      <div className="chat_open">
        {isChatVisible && (
          <div className="chat">
            <Select
              className='chat__select'
              data={namesArray}
              label='Choose Room'
              onChange={(name) => handleJoinRoom(name)}
            />
            <p className="close_button " onClick={() => setIsChatVisible(false)}>X</p>
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
    </>
  );
};

export default Chat;
