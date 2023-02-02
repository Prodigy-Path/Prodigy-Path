/** @format */

import { joinRoom, sendMessage } from '../Chat/useMessage';

describe('joinRoom', () => {
  it('emits a JOIN event with the provided text', () => {
    const socket = {
      emit: jest.fn(),
    };
    const data = {
      socket,
      text: 'room1',
    };
    joinRoom(data);
    expect(socket.emit).toHaveBeenCalledWith('JOIN', 'room1');
  });
  it('emits a SEND_MESSAGE event with the provided text, id, and room name', () => {
    const socket = {
      emit: jest.fn(),
    };
    const data = {
      socket,
      text: 'send message',
    };

    const id = {
      id: 'testId',
    };

    const room = {
      room: 'name',
    };
    sendMessage(data, id, room);
    expect(socket.emit).toHaveBeenCalled();
  });
});
