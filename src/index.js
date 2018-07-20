import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { init as initSocketClient } from './socket-client';
import store from './store';
import Routing from './Routing';
import './variables.scss';
import './main.scss';

initSocketClient();

render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
