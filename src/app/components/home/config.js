export default function($routeProvider, $locationProvider) {
  'ng-inject';
  $routeProvider
    .when('/chat', {
      controller: 'homeCtrl',
      controllerAs: '$ctrl',
      template: '<div><convo-dir></convo-dir></div>'
    });
}
