
export const joinRoom = (data ) => {
  const { socket, text } = data;
  socket.emit('JOIN', text);
};

export const sendMessage = (data) => {
  const { socket, text, id, room } = data;
  socket.emit('SEND_MESSAGE', text, id, room);
};