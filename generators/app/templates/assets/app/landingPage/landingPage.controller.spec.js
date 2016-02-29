describe('When a user is on the landingPage', function() {

  var scope;
  var ctrl;

  beforeEach(module('<%= name %>')); 
  beforeEach(module('<%= name %>.core'));
  beforeEach(module('<%= name %>.landingPage'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl  = $controller('landingPageController', {$scope: scope});
  }));

  it('they should see the tile HelloWorld!', function(){
    <% if( testframework == 'mocha'){ %>
      expect(ctrl.title).to.equal("HelloWorld!");
    <% } else{ %>
      expect(ctrl.title).toEqual("HelloWorld!");
    <% } %>
  });

});
