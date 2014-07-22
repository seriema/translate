'use strict';

describe('Controller: FoundCtrl', function () {

  // load the controller's module
  beforeEach(module('translapediaApp'));

  var FoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundCtrl = $controller('FoundCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
