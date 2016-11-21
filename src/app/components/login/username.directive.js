import controller from './login.controller';

export default function($q, $timeout, $http) {
  'ng-inject';

  return {
    controller: controller,
    controllerAs: '$ctrl',
    require: 'ngModel',
    link: link
  };

  function link(scope, elm, attrs, ctrl) {
    ctrl.$asyncValidators.username = validateName;
    function validateName(modelValue, viewValue) {
      if (ctrl.$isEmpty(modelValue)) return $q.when();
      let def = $q.defer();
      const validateAPI = `http://localhost:9090/users/current`;
      $http.post( validateAPI, { username: modelValue })
        .then(res => {
          if (res.data.userExists) def.reject();
          else def.resolve();
        });
      return def.promise;
    }
  }
}
