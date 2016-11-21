export default function($http, $location) {
  'ng-inject';

  let user;

  return {
    submit,
    set,
    get
  }

  function submit(username) {
    const submitAPI = 'http://localhost:9090/users/add';
    $http.post(submitAPI, {username})
      .then(() => {
        set(username);
        $location.path('/chat');
      });
  }

  function set(username) {
    user = username;
  }

  function get() {
    return user;
  }

}
