import { createStore } from 'redux';
import mainReducer from './reducers/main';

const rootReducer = mainReducer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state, 'Updatet state');
});

export default store;
