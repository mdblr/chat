export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/chat', {
      controller: 'homeCtrl',
      controllerAs: '$ctrl',
      template: '<div><convo-dir></convo-dir></div>'
    });
}
