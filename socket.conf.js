const config = server => {

  const io = require('socket.io')(server);
  const chat = () => {
    io.on('connection', socket => {

      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('a user disconnected');
      });

      socket.on('message', msg => {
        console.log(msg);
        io.emit('message', msg);
      });
    });
  }

  return chat;
}

module.exports = config;
