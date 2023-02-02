/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinRoomThunk, sendMessageThunk, getChats } from '../store/chatSlice';
import { Accordion} from '@mantine/core';
import io from 'socket.io-client';
import { convertToNames } from '../store/loginSlice';
const socket = io.connect(process.env.REACT_APP_SERVER);

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, roomName, chatConnection } = useSelector((state) => state.chat);
  const { user, userConnectionsUsers } = useSelector((state) => state.login);

  const [showMessage, setShowMessage] = useState(false);
  const [textHeader, setTextHeader] = useState(false);
  // const [online, setOnline] = useState(false);



  const filterConnection = chatConnection.filter((item) => user._id === item.mentor || user._id === item.protege);
  const nameConnect = userConnectionsUsers.filter(item =>
    filterConnection.some(filter =>
      item.id === filter.mentor || item.id === filter.protege
    )
  ).map(item => ({
    name: item.name,
    id: item.id,
    _id: filterConnection.find(filter => item.id === filter.mentor || item.id === filter.protege)._id
  }));



  function getNames(nameConnect) {
    return nameConnect.map(item => item.name);
  }

  function getConnectionId(nameConnect) {
    return nameConnect.map(item => item.id);
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
    socket.emit('JOIN', { id: crypto.randomUUID(), userId: user.id })
    socket.on('RECEIVE_MESSAGE', ({ text, id }) => {
      
      dispatch(sendMessageThunk({ text: text, id: id }));
    });
    socket.on('USER_CONNECTED', (data) => {
    });
    socket.on('proofOfLife', (data) => {
    });
    socket.on('ROOMS', (data) => {
      // setOnline(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  
  // HERE IS USER ONLINE DATA !!!!!!!!!!
  
  const idArray = getConnectionId(nameConnect);
  // console.log("online state", online);
  console.log(idArray);
  
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


  function handleJoinRoom(e) {
    let name = e.target.innerText
    setTextHeader(name)
    let text = nameConnect.find(item => item.name === name)._id;
    socket.emit("LEAVE_ROOM", roomName);
    dispatch(sendMessageThunk({ id: null }));
    dispatch(joinRoomThunk({ socket, text }));
    setShowMessage(true);
  }

  return (
    <>
      <Accordion
        variant="contained"
        className="chat__select"
      >
        <Accordion.Item value="Messages">
          <Accordion.Control>Messages</Accordion.Control>
          <Accordion.Panel>
            <p>Your Connections:</p>
            {namesArray.map((item) => (
              <p
                onClick={(e) => handleJoinRoom(e)}
                key={crypto.randomUUID()}
              >
                {item}
              </p>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      {showMessage && (
        <>
          <div className="chat">
            <div className="chat__headerBackground"></div>
            <p
              className="close_button "
              onClick={() => setShowMessage(false)}
            >
              X
            </p>
            <p className="chat__header">{textHeader} </p>

            <div className="chat__message">
              <form onSubmit={handleSubmitMessage}>
                <textarea name="text" />
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="chat__window">
              <ul>
                {messages.map((msg, index) => (
                  <li key={crypto.randomUUID()}>{`${msg.text}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chat;
