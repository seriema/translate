'use strict';

/**
 * @ngdoc directive
 * @name translapediaApp.directive:termDefinition
 * @description
 * # termDefinition
 */
angular.module('translapediaApp')
  .directive('termDefinition', function () {
    return {
      restrict: 'E',
			templateUrl: 'views/directives/term-definition.html'
    };
  });
