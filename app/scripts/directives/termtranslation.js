'use strict';

/**
 * @ngdoc directive
 * @name translapediaApp.directive:termTranslation
 * @description
 * # termTranslation
 */
angular.module('translapediaApp')
  .directive('termTranslation', function () {
    return {
      restrict: 'E',
			transclude: true,
			templateUrl: 'views/directives/term-translation.html'
    };
  });
