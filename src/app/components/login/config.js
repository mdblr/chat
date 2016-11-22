import templateUrl from './login.html';

export default function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: templateUrl
    });
}
