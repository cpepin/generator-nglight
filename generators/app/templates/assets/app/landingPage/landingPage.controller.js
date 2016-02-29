(function() {
  'use strict';

  angular
      .module('<%= name %>.landingPage')
      .controller('landingPageController', landingPageController);

      landingPageController.$inject = [];

      function landingPageController() {
        var vm = this;
        vm.title = "HelloWorld!";
      }

})();
