'use strict';

describe('Controller: NotFoundAmbiguousCtrl', function () {

  // load the controller's module
  beforeEach(module('translapediaApp'));

  var NotFoundAmbiguousCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotFoundAmbiguousCtrl = $controller('NotFoundAmbiguousCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
