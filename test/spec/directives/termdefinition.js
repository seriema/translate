'use strict';

describe('Directive: termDefinition', function () {

  // load the directive's module
  beforeEach(module('translapediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<term-definition></term-definition>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the termDefinition directive');
  }));
});
