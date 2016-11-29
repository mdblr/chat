'use strict';

export default function() {

  return {
    send,
    receive,
    userChange
  }

  function send(socket, message, username) {
    socket.emit('message', {
      msg: message,
      user: username
    });
  }

  function receive(socket, conversation, scope){
    socket.on('message', data => {
      conversation.push(data);
      scope.$apply();
    });
  }

  function userChange(socket, oldName, newName) {
    socket.emit('userChange', {
      oldName,
      newName
    });
  }
}
