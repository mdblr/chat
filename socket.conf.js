const config = server => {

  const io = require('socket.io')(server);
  const chat = () => {

    io.on('connection', socket => {
      console.log('a user connected', socket.);

      socket.on('disconnect', () => {
        console.log('a user disconnected: ');
      });

      socket.on('message', data => {
        io.emit('message', data);
      });

    });
  }

  return chat;
}

module.exports = config;
