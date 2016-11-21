import homeCtrl from './home.controller.js';
import config from './config.js';
import convoDir from '../../shared/convo/convo.directive';
import user from '../../shared/user/user.factory';

export default angular
  .module('chat.home', [])
  .config(config)
  .controller('homeCtrl', homeCtrl)
  .factory('user', user)
  .directive('convoDir', convoDir)
