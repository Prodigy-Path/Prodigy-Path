


export default function messageInterface(io) {

    io.on('proofOfLife', (data) => {
      console.log(data);
    });

    io.on('ROOMS', (data) => {
console.log(data);
    });

  io.on('RECEIVE_MESSAGE', (data) => {
    console.log(data);
  });
}


export const joinRoom = (io, roomName) => {
  if (!io) return;

  io.emit('JOIN', roomName);
};

export const sendMessage = (io, message) => {
  io.emit('SEND_MESSAGE', message);
  console.log(message);
};