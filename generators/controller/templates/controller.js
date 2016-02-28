(function() {
  'use strict';

  angular
      .module('<%= name %>.<%= module %>')
      .controller('<%= ctrl %>', <%= ctrl %>);

      <%= ctrl %>.$inject = [];

      function <%= ctrl %>() {
        var vm = this;
      }

})();
