import templateUrl from './login.html';

export default function($routeProvider, $locationProvider) {
  'ng-inject';
  $routeProvider
    .when('/', {
      controller: 'loginCtrl',
      controllerAs: '$ctrl',
      templateUrl: templateUrl
    });
}
