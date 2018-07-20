import io from 'socket.io-client';
import store from './store';
import { setState } from './actions/gameState';

export const init = () => {
  const socket = io();

  socket.on('connect', () => {
    /**
     * Example game action.
     */
    // const action = {
    //   type: 'TEST_ACTION'
    // };
    //
    // socket.emit('action', action, () => {
    //   console.log('Emitting action done.');
    // });

    socket.emit('get_state', () => {
      console.log('Emitting action done.');
    });
  });

  socket.on('update_state', result => {
    store.dispatch(setState(result.state));
  });
};
