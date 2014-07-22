'use strict';

describe('Controller: NotFoundTermCtrl', function () {

  // load the controller's module
  beforeEach(module('translapediaApp'));

  var NotFoundTermCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotFoundTermCtrl = $controller('NotFoundTermCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
