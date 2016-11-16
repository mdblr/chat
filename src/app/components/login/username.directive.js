export default function($q, $timeout, $http) {
  'ng-inject';

  const definition = {};

  definition.require = 'ngModel';
  definition.link = (scope, elm, attrs, ctrl) => {

    ctrl.$asyncValidators.username = (modelValue, viewValue) => {

      if (ctrl.$isEmpty(modelValue)) {
        return $q.when();
      }

      var def = $q.defer();

      $http.post('http://localhost:9090/users', {username: modelValue})
      .then((res) => {
        res.data.result > 0 ? def.reject() : def.resolve();
      });

      return def.promise;
    }
  }

  return definition;
}
