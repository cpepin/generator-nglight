(function() {
  'use strict';

  angular
    .module('<%= name %>')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/landingPage/landingPage.html'
      });
  }

})();
