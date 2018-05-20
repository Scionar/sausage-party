import io from 'socket.io-client';

export const init = () => {
  const socket = io();

  socket.on('connect', () => {
    const action = {
      type: 'TEST_ACTION'
    };

    socket.emit('action', action, () => {
      console.log('Emitting action done.');
    });
  });
};
