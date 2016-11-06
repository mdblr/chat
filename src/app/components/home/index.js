// import io from 'socket.io';
import homeCtrl from './home.controller.js';
import config from './config.js';
import convo from '../../shared/convo/convo.directive';

export default angular
  .module('chat.home', [])
  .config(config)
  .controller('homeCtrl', homeCtrl)
  .directive('convo', convo);
