(function() {
  // service
  angular
      .module('<%= name %>.<%= module %>')
      .service('<%= service %>', <%= service %>);

  function <%= service %>() {
    var vm = this;
  }

})();
