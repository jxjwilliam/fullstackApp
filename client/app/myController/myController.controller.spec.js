'use strict';

describe('Controller: MyControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var MyControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyControllerCtrl = $controller('MyControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
