import angular from 'angular';
import router from 'angular-route';
import config from './app.routing.js';
import './components/home';
import './components/login';


export default angular
  .module('chat', ['ngRoute', 'chat.login', 'chat.home'])
  .config(config);
