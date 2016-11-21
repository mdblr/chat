'use strict';

import io from 'socket.io-client';

export default function home($scope, user) {
  const socket = io.connect()
  const vm = this;

  vm.username = user.get();
  vm.message = '';
  vm.convo = [];
  vm.send = () => {
    if (!vm.message.trim()) return false;
    socket.emit('message', {
      msg: vm.message,
      user: vm.username
    });
    vm.message = '';
  }

  socket.on('message', data => {
    vm.convo.push(data);
    $scope.$apply();
  });
}
