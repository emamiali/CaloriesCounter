SignupController.$inject = ["$location", "UserService"]; // minification protection
function SignupController ($location, UserService) {
  var vm = this;
  vm.new_user = {}; // form data
console.log('this is the signup controllers');
  vm.signup = function() {
    UserService
      .signup(vm.new_user)
      .then(onSuccess, onError);


    function onSuccess(response) {
      console.log('signup was successful');
      vm.new_user = {}; // clear sign up form
      $location.path('/profile'); // redirect to '/profile'
    }

    function onError(res) {
      console.error('Unable to signup: ', res);
      $location.path('/signup');
    }
  };
}
