const socketIO = require('socket.io');

const state = {
  webSocket: null
};

/**
 * Get webSocket instance.
 */
module.exports.get = () => state.webSocket;

/**
 * Create websocket instance and configure it.
 */
module.exports.create = server => {
  const webSocket = socketIO(server);

  webSocket.on('connection', socket => {
    console.log('User connected.');

    /**
     * Initialize user data for new connection.
     */
    if (!socket.data) {
      socket.data = {
        id: null
      };
    }

    socket.on('disconnect', () => {
      console.log('Socket event: disconnect');
    });

    socket.on('action', (action, fn) => {
      console.log('Socket event: action');
      console.log(action, 'action');
      fn();
      // Todo: Put here data check and dispatch it for Redux store.
    });
  });

  state.webSocket = webSocket;
};
