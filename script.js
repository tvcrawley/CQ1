(function(){
  angular
  .module("app", [])
  .controller("MainCtrl", MainCtrl)
  .controller("ResponseCtrl", ResponseCtrl);

  function MainCtrl(){
    var vm = this;

    vm.here ="Here I am!";

    vm.users = users;
    vm.user = {};
    // vm.user.firstName;
    // vm.user.lastName;
    // vm.user.email;
    // vm.user.phoneNumber;
    // vm.user.mailingList;

    vm.submit = function(event){
      vm.users.push(angular.copy(vm.user));
      console.log(event);
      // event.preventDefault();
      vm.user = {};
    };
    console.log(vm.users);
  };

  function ResponseCtrl(){

  };

})();
