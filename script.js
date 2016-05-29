(function(){
  angular
  .module("app", [])
  .controller("MainCtrl", MainCtrl)
  .controller("ResponseCtrl", ResponseCtrl);

  function MainCtrl(){
    var vm = this;

    vm.users = users;
    vm.user = {};
    vm.mailingListUsers = [];
    vm.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    vm.submit = function(event){

      if(vm.user.mailingList == "Yes"){
        console.log("cool");
        vm.submitted = true;
        vm.mailingListUsers.push(angular.copy(vm.user));
        console.log(vm.mailingListUsers);
        vm.display = "Thank you " + vm.user.firstName + ". You have been added to the mailing list!";
      }
      else if(vm.user.mailingList == "No"){
        vm.submitted = true;
        vm.users.push(angular.copy(vm.user));
        vm.display = "Thank you " + vm.user.firstName + ". Your information has been received.";
      }
      else{
        console.log("crap");
        vm.submitted = false;
        vm.display = "Please choose an option for the mailing list.";
        event.stopPropagation();
      }


      vm.user = {};
    };
    console.log(vm.users);
    vm.checked = false;

  };

  function ResponseCtrl(){

  };

})();
