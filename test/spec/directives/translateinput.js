'use strict';

describe('Directive: translateInput', function () {

  // load the directive's module
  beforeEach(module('translapediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<translate-input></translate-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the translateInput directive');
  }));
});
