'use strict';

describe('Controller: FoundRedirectCtrl', function () {

  // load the controller's module
  beforeEach(module('translapediaApp'));

  var FoundRedirectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundRedirectCtrl = $controller('FoundRedirectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
