(function() {
  'use strict';

  angular
    .module('<%= name %>.<%= module %>')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
  }

})();
