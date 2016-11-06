var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});


http.listen(9090);
