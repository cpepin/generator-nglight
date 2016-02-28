(function() {

  angular
    .module('<%= name %>.<%= module %>')
    .directive('<%= directive %>', <%= directive %>);

    <%= directive %>.$inject = [];

    function <%= directive %>() {
      var vm = this;
    }

})();
