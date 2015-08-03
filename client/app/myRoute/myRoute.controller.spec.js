'use strict';

describe('Controller: MyRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var MyRouteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyRouteCtrl = $controller('MyRouteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
