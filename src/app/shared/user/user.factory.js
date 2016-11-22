export default function($http, $location) {
  'ngInject';

  let user;

  return {
    submit,
    set,
    get,
    rm
  }

  function submit(username) {
    const submitAPI = 'http://localhost:9090/users/add';
    $http.post(submitAPI, {
        username
      })
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

  function rm(username) {
    const rmAPI = 'http://localhost:9090/users/remove';
    $http.delete(rmAPI, {
        username
      })
      .then(() => {
        console.log('user deleted');
      });
  }
}
