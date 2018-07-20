const { createStore } = require('redux');
const serverReducer = require('./serverReducer');

const store = createStore(serverReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state, 'Updatet state');
});

module.exports = store;
