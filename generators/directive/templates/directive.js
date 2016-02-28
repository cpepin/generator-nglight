(function() {

  angular
    .module('<%= name %>.<%= module %>')
    .directive('<%= directive %>', <%= directive %>);

    function <%= directive %>() {
      var vm = this;
    }

})();
