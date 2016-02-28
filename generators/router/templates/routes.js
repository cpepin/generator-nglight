(function() {
  'use strict';

  angular
    .module('<%= name %>.<%= module %>')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
  }

})();
