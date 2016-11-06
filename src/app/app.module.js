import angular from 'angular';
import router from 'angular-route';
import config from './app.routing.js';
import './components/home/index.js';


export default angular
  .module('chat', ['ngRoute', 'chat.home'])
  .config(config);
