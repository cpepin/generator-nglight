(function() {
  'use strict';

  angular
    .module('test.landingPage')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/landingPage/landingPage.html',
        controller: 'landingPageController', 
        controllerAs: 'landing'
      });
  }

})();
