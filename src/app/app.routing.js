import router from 'angular-route';

export default function config($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider
    .otherwise('/');

    $locationProvider.html5Mode(false);
}
