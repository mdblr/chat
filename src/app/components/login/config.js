import templateUrl from './login.html';

export default function($routeProvider, $locationProvider) {
  'ng-inject';
  $routeProvider
    .when('/', {
      templateUrl: templateUrl
    });
}
