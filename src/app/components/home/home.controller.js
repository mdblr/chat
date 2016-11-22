'use strict';

import io from 'socket.io-client';

export default function home($scope, user, $window, message) {
  'ng-inject';

  const socket = io.connect()
  const vm = this;

  vm.username = user.get();
  vm.userMessage;
  vm.conversation = [];
  vm.send = () => {
    message.send(socket, vm.userMessage, vm.username);
    vm.userMessage = '';
  };
  message.receive(socket, vm.conversation, $scope);
  $window.onbeforeunload = username => {
    user.rm(username);
  };
}
