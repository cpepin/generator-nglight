(function() {
  // service
  angular
      .module('<%= name %>.<%= module %>')
      .service('<%= service %>', <%= service %>);

  <%= service %>.$inject = [];

  function <%= service %>() {
    var vm = this;
  }

})();
