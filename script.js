(function(){
  angular
  .module("app", [])
  .controller("MainCtrl", MainCtrl);

  function MainCtrl($http){
    var vm = this;
    vm.user = {};
    vm.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    // form submit function
    vm.submit = function(){

      // user's information
      function userInfo(){

        //sending info to php file
        $http({
          method: "POST",
          url: "users.php",
          data: {
            firstName: vm.user.firstName,
            lastName: vm.user.lastName,
            email: vm.user.email,
            phoneNumber: vm.user.phoneNumber,
            mailingList: vm.user.mailingList
          },
          headers: {"Content-type": "application/x-www-form-urlencoded"}
        });
      };

      // Mailing List: ACCEPTED
      if(vm.user.mailingList === "Yes"){
        vm.user.mailingList = true;
        userInfo();

        vm.display = "Thank you " + vm.user.firstName + ". You have been added to the mailing list!";
      }

      // Mailing List: DECLINED
      else if(vm.user.mailingList === "No"){
        vm.user.mailingList = false;
        userInfo();

        vm.display = "Thank you " + vm.user.firstName + ". Your information has been received.";
      }
      
      //reset form
      vm.user = {};
    };
  }
})();
