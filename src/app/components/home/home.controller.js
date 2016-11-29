'use strict';

import io from 'socket.io-client';

export default function home(user, message, $scope, $window) {
  'ngInject';

  const socket = io.connect()
  const vm = this;

  vm.username = user.get();
  vm.newName;
  vm.userMessage;
  vm.conversation = [];
  vm.send = (userMessage, username) => {
    message.send(socket, userMessage, username);
    vm.userMessage = '';
  };
  vm.editUser = (username, newName) => {
    let temp = username;
    user.editUser(username, newName)
      .then( res => {
        user.set(res.data.user);
        vm.username = user.get();
        message.userChange(socket, temp, newName);
        vm.newName = ''; 
      });
  };
  message.receive(socket, vm.conversation, $scope);
  $window.onbeforeunload = username => {
    user.rm(username);
  };
}
