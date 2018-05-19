const express = require('express');
const http = require('http');

const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';
const publicPath = `http://${hostname}:${port}`;

const app = express();
const server = http.Server(app);

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  const scriptPath = `${publicPath}/static/screen.js`;
  res.render('default', {
    title: 'Sausage Party - Screen',
    viewScript: scriptPath
  });
});

app.get('/player', (req, res) => {
  const scriptPath = `${publicPath}/static/player.js`;
  res.render('player', {
    title: 'Sausage Party - Player',
    viewScript: scriptPath
  });
});

server.listen(port, () => {
  console.log(`Server listening on port :${port}`);
});
