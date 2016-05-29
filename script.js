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
    vm.mailingListUsers = [];
    // vm.user.firstName;
    // vm.user.lastName;
    // vm.user.email;
    // vm.user.phoneNumber;
    // vm.user.mailingList;

    vm.submit = function(){
      vm.users.push(angular.copy(vm.user));
      vm.submitted = true;

if(vm.user.mailingList == "Yes"){
  console.log("cool");
  vm.mailingListUsers.push(angular.copy(vm.user));
  console.log(vm.mailingListUsers);
        vm.display = "Thank you " + vm.user.firstName + ". You have been added to the mailing list!";
}
else{
  console.log("crap");
        vm.display = "Thank you " + vm.user.firstName + ".";
}


      vm.user = {};
    };
    console.log(vm.users);

  };

  function ResponseCtrl(){

  };

})();
