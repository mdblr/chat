import router from 'angular-route';

export default function config($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise('/');

    $locationProvider.html5Mode(false);
}
