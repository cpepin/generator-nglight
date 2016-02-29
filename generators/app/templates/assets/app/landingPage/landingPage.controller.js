(function() {
  'use strict';

  angular
      .module('test.landingPage')
      .controller('landingPageController', landingPageController);

      landingPageController.$inject = [];

      function landingPageController() {
        var vm = this;
        vm.title = "HelloWorld!";
      }

})();
