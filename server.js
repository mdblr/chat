var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9090);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('message', msg); 
  })
});
