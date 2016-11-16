import config from './config.js';
import loginCtrl from './login.controller.js';
import username from './username.directive.js'; 

export default angular
  .module('chat.login', [])
  .config(config)
  .controller('loginCtrl',loginCtrl)
  .directive('username', username);
