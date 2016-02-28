(function() {
  'use strict';

  angular
    .module('<%= name %>')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
