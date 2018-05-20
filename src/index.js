import React from 'react';
import { render } from 'react-dom';
import { init as initSocketClient } from './socket-client';
import Routing from './Routing';
import './main.scss';

initSocketClient();

render(<Routing />, document.getElementById('root'));
