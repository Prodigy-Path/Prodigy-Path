
export const joinRoom = (data ) => {
  const { socket, text } = data;


  socket.emit('JOIN', text);
};

export const sendMessage = (data) => {
  console.log(data);
  const { socket, text } = data;
  socket.emit('SEND_MESSAGE', text);
};