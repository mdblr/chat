'use strict';

import io from 'socket.io-client';

export default function home($scope) {
  var socket = io.connect()

  const vm = this;
  vm.message = '';
  vm.convo = [];
  vm.send = () => {
    if (!vm.message.trim()) return false;
    socket.emit('message', vm.message);
    vm.message = '';
  }

  socket.on('message', (msg) => {
    vm.convo.push(msg);
    $scope.$apply();
  });
}
