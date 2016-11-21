import config from './config.js';
import loginCtrl from './login.controller.js';
import username from './username.directive.js';
import user from '../../shared/user/user.factory';

export default angular
  .module('chat.login', [])
  .config(config)
  .factory('user', user)
  .directive('username', username);
