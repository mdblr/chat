const config = server => {

  const io = require('socket.io')(server);
  const chat = events;

  function events() {
    io.on('connection', socket => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('a user disconnected: ');
      });

      socket.on('message', data => {
        io.emit('message', data);
      });

      socket.on('userChange', data => {
        io.emit('message', {
          userChange: `${data.oldName} changed their name to ${data.newName}`
        });
      });
    });
  }

  return chat;
}

module.exports = config;
