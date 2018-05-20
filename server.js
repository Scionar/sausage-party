const express = require('express');
const http = require('http');
const path = require('path');
const webSocket = require('./websocket');

const port = process.env.PORT || 3000;
const app = express();
const server = http.Server(app);
webSocket.create(server);

app.use('/static', express.static('dist/static'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`Server listening on port :${port}`);
});
