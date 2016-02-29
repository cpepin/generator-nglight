describe('When a user is on the landingPage', function() {

  var scope;
  var ctrl;

  beforeEach(module('test'));
  beforeEach(module('test.core'));
  beforeEach(module('test.landingPage'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl  = $controller('landingPageController', {$scope: scope});
  }));

  it('they should see the tile HelloWorld!', function(){
    expect(ctrl.title).to.equal("HelloWorld!");
  });

});
