'use strict';

describe('Controller: InvestorlistaCtrl', function () {

  // load the controller's module
  beforeEach(module('appwinsApp'));

  var InvestorlistaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvestorlistaCtrl = $controller('InvestorlistaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
