const app = require('express')();
const server = require('http').Server(app);
const chat = require('./socket.conf')(server);

server.listen(9090);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

chat();
